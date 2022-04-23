// Core
import { useCallback } from 'react';
// Store
import { useDispatch, useSelector } from 'react-redux';
// Actions
import { dataActions } from '../../../redux/actions/dataActions';
// Components
import { Check } from './Check';
// Instruments
import PropTypes from 'prop-types';

export const TodoItem = ({ id, title, status }) => {
  const dispatch = useDispatch();
  const { setTodoItemState } = dataActions;
  const todosList = useSelector((state) => state.todo.todosList);

  const handleStatusClick = useCallback(() => {
    dispatch(setTodoItemState(id));
  }, [todosList]);

  return (
    <button
      className="flex items-center mb-4 rounded-2xl bg-zinc-800 p-5 w-full"
      onClick={handleStatusClick}>
      <Check status={status} />
      {title}
    </button>
  );
};

TodoItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  status: PropTypes.string
};
