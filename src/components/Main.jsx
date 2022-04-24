import { CreateTodoField } from './CreateTodoField';
import { TodosList } from './TodosList/TodosList';
import { ErrorMessage } from './ErrorMessage';
import { useSelector } from 'react-redux';

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
