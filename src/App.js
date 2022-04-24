// Core
import { useEffect } from 'react';
// Hooks
import { useFetchTodos } from './hooks/index';
// Store
import { useSelector } from 'react-redux';
// Helpers
import { fetchify } from '../src/helpers/index';
// Components
import { Logo, Main } from './components/';

export const App = () => {
  const todosList = useSelector((state) => state.todo.todosList);
  const isLoading = useSelector((state) => state.ui.isLoading);

  const { fetchData } = useFetchTodos();

  useEffect(() => {
    if (!todosList.length) fetchData();
  }, []);

  return (
    <section className="text-white w-4/5 mx-auto">
      <Logo />
      {fetchify(isLoading, <Main />)}
    </section>
  );
};
