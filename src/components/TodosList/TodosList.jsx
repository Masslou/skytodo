// Store
import { useSelector } from 'react-redux';
// Hooks
// import { useStoragedTodos } from '../../hooks';
// Components
import { TodoItem } from './item/TodoItem';

export const TodosList = () => {
  // const { storedTodosList } = useStoragedTodos();
  const todosList = useSelector((state) => state.todo.todosList);

  const todosJSX = () => {
    // const todosResource = storedTodosList.length ? storedTodosList : todosList;
    // console.log(todosResource);
    return todosList.map((todo) => {
      return <TodoItem key={todo.id} {...todo} />;
    });
  };
  return <>{todosJSX()}</>;
};
