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

  const handleStatusClick = useCallback(
    (id) => {
      dispatch(setTodoItemState(id));
    },
    [todosList]
  );

  const handleRemoveTodo = useCallback(
    (id) => {
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
          handleStatusClick={handleStatusClick}
          handleRemoveTodo={handleRemoveTodo}
        />
      );
    });
  };
  return <>{todosJSX()}</>;
};
