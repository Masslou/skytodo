// Core
import { useCallback, useEffect, useState, useRef } from 'react';
// Store
import { useDispatch, useSelector } from 'react-redux';
// Actions
import { dataActions } from '../../redux/actions/dataActions';

export const CreateTodoField = () => {
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const { addTodoItem } = dataActions;
  const todosList = useSelector((state) => state.todo.todosList);

  const [title, setTitle] = useState('');

  const handleAddTodoClick = useCallback(
    (title) => {
      dispatch(addTodoItem(title));
      setTitle('');
    },
    [todosList]
  );

  return (
    <section className="flex items-center justify-between mb-20 rounded-2xl border-zinc-800 border-2 px-5 py-3 w-full mt-10">
      <input
        type="text"
        className="bg-transparent w-full border-none outline-none"
        value={title}
        ref={inputRef}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a task"
        onKeyPress={(e) => e.key === 'Enter' && handleAddTodoClick(title)}
      />
    </section>
  );
};
