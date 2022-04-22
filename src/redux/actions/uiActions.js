import { SET_LOADER } from '../../constnts/constants';

export const uiActions = {
  setLoader: (loader) => {
    return {
      type: SET_LOADER,
      payload: loader
    };
  }
};
