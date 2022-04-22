export const useStoragedTodos = () => {
  const retrievedStoreStr = localStorage.getItem('persist:persist-key');
  let storedTodosList;

  if (!retrievedStoreStr) {
    storedTodosList = [];
  } else {
    const storedData = JSON.parse(retrievedStoreStr);
    const fetchedTodosData = JSON.parse(storedData.todo) ? JSON.parse(storedData.todo) : '';
    storedTodosList = fetchedTodosData.todosList ? fetchedTodosData.todosList : '';
  }

  return { storedTodosList };
};
