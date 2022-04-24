// Core
import { useEffect, useRef, useState } from 'react';
// Store
import { useDispatch } from 'react-redux';
// Actions
import { dataActions } from '../../redux/actions/dataActions';
// Instruments
import PropTypes from 'prop-types';

export const ChangeTodoField = ({ setEditing, id, status, title }) => {
  const [localTitle, setLocalTitle] = useState(title);
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const dispatch = useDispatch();
  const { editTodoItem } = dataActions;

  const changeTodoHandler = () => {
    const todoData = { id, localTitle, status };
    dispatch(editTodoItem(todoData));
    setEditing(false);
  };

  return (
    <section className="flex items-center rounded-2xl bg-zinc-800 p-5 w-full mb-4">
      <input
        type="text"
        className="bg-transparent w-full border-none outline-none"
        ref={inputRef}
        value={localTitle}
        onChange={(e) => setLocalTitle(e.target.value)}
        onBlur={() => setEditing(false)}
        placeholder="Change a task"
        onKeyPress={(e) => e.key === 'Enter' && changeTodoHandler(localTitle, id, status)}
      />
    </section>
  );
};

ChangeTodoField.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  setEditing: PropTypes.func.isRequired
};
