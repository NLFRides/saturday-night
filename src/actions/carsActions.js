import { CONSTANTS } from "../actions";

export const addCar = ( driverName, lunch, notes ) => {
  return {
    type: CONSTANTS.ADD_CAR,
    payload: { driverName, lunch, notes }
  };
};