import axios from 'axios';
import { uiActions } from './uiActions';
import {
  CLEAR_ERROR,
  SET_LOADER,
  SET_TODOS,
  SET_ERROR,
  SET_TODO_ITEM_STATE,
  REMOVE_TODO_ITEM,
  ADD_TODO_ITEM
} from '../../constants/constants';

export const dataActions = {
  fetchToDos: () => (dispatch) => {
    dispatch(uiActions.setLoader(true));
    dispatch(dataActions.clearError());
    axios
      .get(`${process.env.REACT_APP_TODOS_API_URL}`)
      .then((response) => {
        dispatch(uiActions.setLoader(false));
        if (response.status === 200) {
          if (response.data) {
            console.log(response.data.data);
            dispatch(dataActions.setTodos(response.data.data));
          }
        } else {
          dispatch(dataActions.setError('ERROR'));
        }
      })
      .catch((error) => {
        dispatch(uiActions.setLoader(false));
        dispatch(dataActions.setError(error.message));
      });
  },

  setTodos: (todosList) => {
    return {
      type: SET_TODOS,
      payload: todosList
    };
  },

  addTodoItem: (title) => {
    return {
      type: ADD_TODO_ITEM,
      payload: title
    };
  },

  setTodoItemState: (id) => {
    return {
      type: SET_TODO_ITEM_STATE,
      payload: id
    };
  },

  removeTodoItem: (id) => {
    return {
      type: REMOVE_TODO_ITEM,
      payload: id
    };
  },

  setLoader: (loader) => {
    return {
      type: SET_LOADER,
      payload: loader
    };
  },

  setError: (text) => {
    return {
      type: SET_ERROR,
      payload: text
    };
  },

  clearError: () => {
    return {
      type: CLEAR_ERROR
    };
  }
};
