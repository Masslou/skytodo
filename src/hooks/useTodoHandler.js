import { useDispatch, useSelector } from 'react-redux';
import { dataActions } from '../redux/actions/dataActions';
import { useCallback } from 'react';

export const useTodoHandler = () => {
  const dispatch = useDispatch();
  const { setTodoItemState, removeTodoItem } = dataActions;
  const todosList = useSelector((state) => state.todo.todosList);

  const editTodoHandler = useCallback(
    (e, id, setIdEditing) => {
      e.stopPropagation();
      setIdEditing(id);
    },
    [todosList]
  );

  const toggleTodoHandler = useCallback(
    (e, id) => {
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

  return { editTodoHandler, toggleTodoHandler, changeTodoHandler, removeTodoHandler };
};
