// Core
import { useState } from 'react';
// Store
import { useSelector } from 'react-redux';
// Hooks
import { useTodoHandler } from '../../hooks';
// Components
import { TodoItem } from './item/TodoItem';
import { ChangeTodoField } from '../changeTodoField/ChangeTodoField';

export const TodosList = () => {
  const todosList = useSelector((state) => state.todo.todosList);
  const [idEditing, setIdEditing] = useState('');

  const { toggleTodoHandler, removeTodoHandler, changeTodoHandler, editTodoHandler } =
    useTodoHandler();

  const todosJSX = () => {
    return todosList.map((todo) => {
      return idEditing === todo.id ? (
        <ChangeTodoField key={todo.id} setIdEditing={setIdEditing} {...todo} />
      ) : (
        <TodoItem
          key={todo.id}
          {...todo}
          setIdEditing={setIdEditing}
          editTodoHandler={editTodoHandler}
          toggleTodoHandler={toggleTodoHandler}
          removeTodoHandler={removeTodoHandler}
          changeTodoHandler={changeTodoHandler}
        />
      );
    });
  };

  return <>{todosJSX()}</>;
};
