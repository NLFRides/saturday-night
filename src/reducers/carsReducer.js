import { CONSTANTS } from "../actions";

const initialState = {
  "car-0": {
    id: `car-${0}`,
    driverName: "Jason Huang",
    lunch: 0,
    riders: [
      `rider-${0}`
    ],
    notes: "",
  },
  "car-1": {
    id: `car-${1}`,
    driverName: "Jeff Huang",
    lunch: 0,
    riders: [`rider-${0}`],
    notes: "",
  },
};

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

      return { ...state, [id]: newCar };
    }

    case CONSTANTS.DRAG_HAPPENED: {
      const {
        draggableID,
        draggableType,
        droppableStartID,
        droppableEndID,
        droppableStartIndex,
        droppableEndIndex,
      } = action.payload;

      if (draggableType === "car") {
        return state;
      } else {
        // CHECK THAT IF IT WAS DRAGGED INTO/OUT of UNSASSIGNED, UPDATE ACCORDINGLY

        const newState = { ...state };

        const carStart = state[droppableStartID]
        const rider = carStart.riders.splice(droppableStartIndex, 1);
        const carEnd = state[droppableEndID]
        carEnd.riders.splice(droppableEndIndex, 0, ...rider);
        return newState;
      }
    }

    default:
      return state;
  }
};

export default carsReducer;
