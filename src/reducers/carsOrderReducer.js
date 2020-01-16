import { CONSTANTS } from "../actions";

const initialState = [
  `car-${1}`, `car-${0}`,
];

const carsOrderReducer = (state = initialState, action) => {

  switch (action.type) {

    case CONSTANTS.ADD_CAR: {
      const { id } = action.payload;

      return [...state, id];
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
        const newState = { ...state };

        const car = newState.splice(droppableStartIndex, 1);
        newState.splice(droppableEndIndex, 0, ...car);
        return newState;
      } else {
        return state;
      }
    }

    default:
      return state;
  }
};

export default carsOrderReducer;
