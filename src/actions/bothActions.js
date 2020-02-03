import { CONSTANTS } from "../actions";

export const clear = () => {
  return {
    type: CONSTANTS.CLEAR,
  }
}

export const load = (state) => {
  return {
    type: CONSTANTS.LOAD,
    payload: state,
  };
}

export const sort = (
  draggableId,
  draggableType,
  droppableStartId,
  droppableEndId,
  droppableStartIndex,
  droppableEndIndex,
) => {
  return {
    type: CONSTANTS.DRAG_HAPPENED,
    payload: {
      draggableId,
      draggableType,
      droppableStartId,
      droppableEndId,
      droppableStartIndex,
      droppableEndIndex,
    }
  };
};
