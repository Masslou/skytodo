import {
  SET_ERROR,
  CLEAR_ERROR,
  SET_TODOS,
  SET_TODO_ITEM_STATE,
  REMOVE_TODO_ITEM
} from '../../constants/constants';

const initialState = {
  todosList: [],
  error: ''
};

export const todoReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case SET_ERROR:
      return { ...state, error: actions.payload };

    case SET_TODO_ITEM_STATE: {
      const index = state.todosList.findIndex((todo) => todo.id === actions.payload);
      const isCompleted = state.todosList[index].status === 'completed';
      const newTodosArray = state.todosList.map((item) =>
        item.id === actions.payload
          ? Object.assign(
              {},
              item,
              isCompleted ? (item.status = 'pending') : (item.status = 'completed')
            )
          : item
      );
      return { ...state, todosList: newTodosArray };
    }

    case REMOVE_TODO_ITEM: {
      const oldTodosList = [...state.todosList];
      const newTodosList = oldTodosList.filter((item) => item.id !== actions.payload);

      return { ...state, todosList: newTodosList };
    }

    case SET_TODOS:
      return { ...state, todosList: actions.payload };

    case CLEAR_ERROR:
      return { ...state, error: '' };
    default:
      return state;
  }
};
