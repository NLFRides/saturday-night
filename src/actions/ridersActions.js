import { CONSTANTS } from "../actions";
import { uuid } from "uuidv4";

export const addRider = (name, lunch, location, notes) => {

  const id = uuid();

  return {
    type: CONSTANTS.ADD_RIDER,
    payload: {
      id,
      name,
      lunch,
      location,
      notes
    }
  };
};
