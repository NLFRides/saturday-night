import { CONSTANTS } from "../actions";
import uuid from "uuidv4";

export const addRider = (riderName, lunch, location, notes) => {

  const id = uuid();

  return {
    type: CONSTANTS.ADD_RIDER,
    payload: {
      id,
      riderName,
      lunch,
      location,
      notes
    }
  };
};
