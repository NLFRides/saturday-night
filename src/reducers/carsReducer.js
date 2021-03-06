import { CONSTANTS } from "../actions";
import { CAR_TYPE, UNASSIGNED_RIDERS_GRID_ID } from "../constants";

// {
//   "car-0": {
//     id: `car-${0}`,
//     driverName: "Jason Huang",
//     lunch: 0,
//     riders: [
//       `rider-${0}`
//     ],
//     notes: "",
//   },
// };

const initialState = {};

const carsReducer = (state = initialState, action) => {
  switch (action.type) {

    case CONSTANTS.ADD_CAR: {
      const {
        id,
        driverName,
        lunch,
        notes,
      } = action.payload;

      const newCar = {
        id: id,
        driverName: driverName,
        lunch: lunch,
        riders: [],
        notes: notes,
      };

      return { ...state, id: newCar };
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
          return state;
        } else if (startUnassigned) {
          const newState = { ...state };
          const carEnd = newState[droppableEndId];
          carEnd.riders.splice(droppableEndIndex, 0, draggableId);
          return newState;
        } else if (endUnassigned) {
          const newState = { ...state };
          const carStart = newState[droppableStartId];
          carStart.riders.splice(droppableStartIndex, 1);
          return newState;
        } else {
          const newState = { ...state };

          const carStart = newState[droppableStartId];
          const rider = carStart.riders.splice(droppableStartIndex, 1);
          const carEnd = newState[droppableEndId];
          carEnd.riders.splice(droppableEndIndex, 0, ...rider);
          return newState;
        }
      }
    }

    case CONSTANTS.DELETE_RIDER: {
      const riderId = action.payload.id;
      const newState = { ...state };
      
      const car = Object.keys(newState).find(car => newState[car].riders.includes(riderId));

      if (car === undefined) {
        return newState;
      }

      const riderIndex = newState[car].riders.indexOf(riderId);
      newState[car].riders.splice(riderIndex, 1);

      return newState;
    }

    default:
      return state;
  }
};

export default carsReducer;
