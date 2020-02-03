import { combineReducers } from 'redux';

import carsOrderReducer from './carsOrderReducer';
import carsReducer from "./carsReducer";
import unassignedRidersReducer from './unassignedRidersReducer';
import ridersReducer from "./ridersReducer";
import { CONSTANTS } from '../actions';

const appReducer = combineReducers({
  carsOrder: carsOrderReducer,
  carsInfo: carsReducer,
  unassignedRiders: unassignedRidersReducer,
  ridersInfo: ridersReducer,
});

const rootReducer = (state, action) => {

  if (action.type === CONSTANTS.CLEAR) {
    state = undefined;
  } else if (action.type === CONSTANTS.LOAD) {
    state = action.payload;
  }

  return appReducer(state, action);
}

export default rootReducer;
