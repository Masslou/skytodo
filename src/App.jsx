// Core
import { useEffect } from 'react';
// Hooks
import { useFetchTodos } from './hooks/index';
// Store
import { useSelector } from 'react-redux';
// Helpers
import { fetchify } from '../src/helpers/index';
// Components
import { ErrorMessage, TodosList } from './components/';

export const App = () => {
  // const { storedTodosList } = useStoragedTodos();
  const todosList = useSelector((state) => state.todo.todosList);

  const { fetchData } = useFetchTodos();

  useEffect(() => {
    if (!todosList.length) fetchData();
  }, []);

  const isLoading = useSelector((state) => state.ui.isLoading);
  const error = useSelector((state) => state.todo.error);

  return (
    <section className="text-white w-4/5 mx-auto">
      <h1 className="text-2xl font-bold text-center mb-10">Masslou Todo</h1>
      {fetchify(isLoading, <TodosList />)}
      {error && <ErrorMessage />}
    </section>
  );
};
