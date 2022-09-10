import { CLICK_UPDATE_VALUE } from '../action-types';

const initialState = {
  newValue: ''
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLICK_UPDATE_VALUE:
      return {
        ...state,
        newValue: action.newValue
      };
    default:
      return state;
  }
};
