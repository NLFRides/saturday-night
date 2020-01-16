import { CONSTANTS } from "../actions";

const initialState = [
  "rider-2", "rider-3"
];

const unassignedRidersReducer = (state = initialState, action) => {
  switch (action.type) {

    case CONSTANTS.ADD_RIDER: {
      const { id } = action.payload

      return [...state, id];
    }

    case CONSTANTS.DRAG_HAPPENED: {
      return state;
    }

    default:
      return state;
  }
};

export default unassignedRidersReducer;
