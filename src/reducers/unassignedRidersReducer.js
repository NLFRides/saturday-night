import { CONSTANTS } from "../actions";
import { CAR_TYPE, UNASSIGNED_RIDERS_GRID_ID } from "../constants";

// [ "rider-2", "rider-3", ];
const initialState = ["rider-0"];

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

      if (draggableType === CAR_TYPE) {
        return state;
      } else {
        const startUnassigned = droppableStartId === UNASSIGNED_RIDERS_GRID_ID;
        const endUnassigned = droppableEndId === UNASSIGNED_RIDERS_GRID_ID;
        
        if (startUnassigned && endUnassigned) {
          const newState = [ ...state ];
          const rider = newState.splice(droppableStartIndex, 1);
          newState.splice(droppableEndIndex, 0, ...rider);
          return newState;
        } else if (startUnassigned) {
          const newState = [ ...state ];
          newState.splice(droppableStartIndex, 1);
          return newState;
        } else if (endUnassigned) {
          const newState = [ ...state ];
          newState.splice(droppableEndIndex, 0, draggableId);
          return newState;
        } else {
          return state;
        }
      }

    }

    case CONSTANTS.DELETE_RIDER: {
      const riderId = action.payload.id;
      const newState = [ ...state ];
      
      const riderIndex = newState.indexOf(riderId);

      if (riderIndex === -1) {
        return newState;
      }

      newState.splice(riderIndex, 1);

      return newState;
    }

    default:
      return state;
  }
};

export default unassignedRidersReducer;
