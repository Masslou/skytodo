import { SET_LOADER } from '../../constants/constants';

const initialState = {
  isLoading: false
};

export const uiReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case SET_LOADER:
      return { ...state, isLoading: actions.payload };
    default:
      return state;
  }
};
