import { CONSTANTS } from "../actions";
import { CAR_TYPE } from "../constants";

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
        draggableId,
        draggableType,
        droppableStartId,
        droppableEndId,
        droppableStartIndex,
        droppableEndIndex,
      } = action.payload;

      if (draggableType === CAR_TYPE) {
        const newState = [ ...state ];

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
