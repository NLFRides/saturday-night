import { CONSTANTS } from "../actions";

const initialState = [
  "rider-2"
];

const unassignedRidersReducer = (state = initialState, action) => {
  switch (action.type) {

    case CONSTANTS.ADD_RIDER: {
      const { id } = action.payload

      return [...state, id];
    }

    case CONSTANTS.DRAG_HAPPENED: {
      const {
        draggableId,
        draggableType,
        droppableStartId,
        droppableEndId,
        droppableStartIndex,
        droppableEndIndex,
      } = action.payload;

      if (draggableType === "car") {
        return state;
      } else {
        return state;
      }

    }

    default:
      return state;
  }
};

export default unassignedRidersReducer;
