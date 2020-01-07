import { combineReducers } from 'redux';
import carsReducer from "./carsReducer";

const rootReducer = combineReducers({
  cars: carsReducer
});

export default rootReducer;