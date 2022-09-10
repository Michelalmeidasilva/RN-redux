import { CLICK_UPDATE_VALUE } from './action-types';

export const clickButton = value => ({
  type: CLICK_UPDATE_VALUE,
  newValue: value
});
