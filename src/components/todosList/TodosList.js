// Core
import { useCallback } from 'react';
// Store
import { useDispatch, useSelector } from 'react-redux';
// Actions
import { dataActions } from '../../redux/actions/dataActions';
// Components
import { TodoItem } from './item/TodoItem';

export const TodosList = () => {
  const dispatch = useDispatch();
  const { setTodoItemState, removeTodoItem } = dataActions;
  const todosList = useSelector((state) => state.todo.todosList);

  const toggleTodoHandler = useCallback(
    (id) => {
      dispatch(setTodoItemState(id));
    },
    [todosList]
  );

  const changeTodoHandler = useCallback(
    (e, id) => {
      e.stopPropagation();
      dispatch(setTodoItemState(id));
    },
    [todosList]
  );

  const removeTodoHandler = useCallback(
    (e, id) => {
      e.stopPropagation();
      dispatch(removeTodoItem(id));
    },
    [todosList]
  );

  const todosJSX = () => {
    return todosList.map((todo) => {
      return (
        <TodoItem
          key={todo.id}
          {...todo}
          toggleTodoHandler={toggleTodoHandler}
          removeTodoHandler={removeTodoHandler}
          changeTodoHandler={changeTodoHandler}
        />
      );
    });
  };
  return <>{todosJSX()}</>;
};
