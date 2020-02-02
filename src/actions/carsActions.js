import { CONSTANTS } from "../actions";
import { uuid } from "uuidv4";

export const addCar = (driverName, lunch, notes) => {

  const id = uuid();

  return {
    type: CONSTANTS.ADD_CAR,
    payload: {
      id,
      driverName,
      lunch,
      notes,
    }
  };
};

