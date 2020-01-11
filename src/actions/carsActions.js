import { CONSTANTS } from "../actions";

export const addCar = ( driverName, lunch, notes ) => {
  return {
    type: CONSTANTS.ADD_CAR,
    payload: { driverName, lunch, notes }
  };
};

export const sort = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  draggableId,
  type,
) => {
  return {
    type: CONSTANTS.DRAG_HAPPENED,
    payload: {
      droppableIdStart,
      droppableIdEnd,
      droppableIndexStart,
      droppableIndexEnd,
      draggableId,
      type,
    }
  };
};