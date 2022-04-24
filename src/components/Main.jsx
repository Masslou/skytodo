// Store
import { useSelector } from 'react-redux';
// Components
import { CreateTodoField, TodosList, ErrorMessage } from './index';

export const Main = () => {
  const error = useSelector((state) => state.todo.error);
  let mainJSX;

  if (!error) {
    mainJSX = (
      <>
        <CreateTodoField />
        <TodosList />
      </>
    );
  } else {
    mainJSX = <ErrorMessage />;
  }

  return mainJSX;
};
