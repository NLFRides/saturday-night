import { combineReducers } from 'redux';
import unassignedRidersReducer from './unassignedRidersReducer';
import ridersReducer from "./ridersReducer";
import carsOrderReducer from './carsOrderReducer';
import carsReducer from "./carsReducer";

const rootReducer = combineReducers({
  carsOrder: carsOrderReducer,
  cars: carsReducer,
  unassignedRiders: unassignedRidersReducer,
  riders: ridersReducer,
});

export default rootReducer;