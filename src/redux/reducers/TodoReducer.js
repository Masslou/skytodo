import { SET_ERROR, CLEAR_ERROR, SET_TODOS } from '../../constnts/constants';

const initialState = {
  todosList: [],
  error: ''
};

export const todoReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case SET_ERROR:
      return { ...state, error: actions.payload };
    case SET_TODOS:
      return { ...state, todosList: actions.payload };
    case CLEAR_ERROR:
      return { ...state, error: '' };
    default:
      return state;
  }
};
