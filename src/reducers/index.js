import { combineReducers } from 'redux';

import carsOrderReducer from './carsOrderReducer';
import carsReducer from "./carsReducer";
import unassignedRidersReducer from './unassignedRidersReducer';
import ridersReducer from "./ridersReducer";

const rootReducer = combineReducers({
  carsOrder: carsOrderReducer,
  carsInfo: carsReducer,
  unassignedRiders: unassignedRidersReducer,
  ridersInfo: ridersReducer,
});

export default rootReducer;
