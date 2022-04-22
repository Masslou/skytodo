// Store
import { useSelector } from 'react-redux';
// Hooks
import { useStoragedTodos } from '../../hooks/useStoragedTodos';
// Components
import { Todo } from './Todo';

export const TodosList = () => {
  const { storedTodosList } = useStoragedTodos();
  const todosList = useSelector((state) => state.todo.todosList);

  const todosJSX = () => {
    const todosResource = storedTodosList.length ? storedTodosList : todosList;
    return todosResource.map((todo) => {
      return <Todo key={todo.id} {...todo} />;
    });
  };
  return <>{todosJSX()}</>;
};
