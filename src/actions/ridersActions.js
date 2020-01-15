import { CONSTANTS } from "../actions";

export const addRider = ( riderName, lunch, location, notes ) => {
  return {
    type: CONSTANTS.ADD_RIDER,
    payload: { riderName, lunch, location, notes }
  };
};