import { SET_LOADER } from '../../constants/constants';

export const uiActions = {
  setLoader: (loader) => {
    return {
      type: SET_LOADER,
      payload: loader
    };
  }
};
