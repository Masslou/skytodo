import axios from 'axios';
import { uiActions } from './uiActions';
import { CLEAR_ERROR, SET_LOADER, SET_TODOS, SET_ERROR } from '../../constnts/constants';

export const dataActions = {
  fetchToDos: () => (dispatch) => {
    dispatch(uiActions.setLoader(true));
    axios
      .get(`${process.env.REACT_APP_TODOS_API_URL}`)
      .then((response) => {
        dispatch(uiActions.setLoader(false));
        dispatch(dataActions.clearError());
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
