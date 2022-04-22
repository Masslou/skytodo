// Core
import { useEffect } from 'react';
// Hooks
import { useFetchTodos } from './hooks/index';
// Store
import { useSelector } from 'react-redux';
// Helpers
import { fetchify } from '../src/helpers/index';
// Components
import { ErrorMessage } from './components/index';
import { TodosList } from './components/TodosList/TodosList';
import { useStoragedTodos } from './hooks/useStoragedTodos';

export const App = () => {
  const { storedTodosList } = useStoragedTodos();
  const { fetchData } = useFetchTodos();

  useEffect(() => {
    if (!storedTodosList.length) fetchData();
  }, []);

  const isLoading = useSelector((state) => state.ui.isLoading);
  const error = useSelector((state) => state.todo.error);

  return (
    <section className="min-h-screen bg-gray-900 text-white">
      {fetchify(isLoading, <TodosList />)}
      {error && <ErrorMessage />}
    </section>
  );
};
