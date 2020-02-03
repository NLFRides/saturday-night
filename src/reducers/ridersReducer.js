import { CONSTANTS } from "../actions";
import { SOUTH, NORTH, OC } from "../constants";

// {
//   "rider-0": {
//     id: `rider-${0}`,
//     name: "Jabon",
//     lunch: 0,
//     location: SOUTH,
//     notes: "Jabon Notes",
//   },
// };

const initialState = {};

const ridersReducer = (state = initialState, action) => {
  
  switch (action.type) {

    case CONSTANTS.ADD_RIDER: {
      const {
        id,
        name,
        lunch,
        location,
        notes
      } = action.payload

      const newRider = {
        id: id,
        name: name,
        lunch: lunch,
        location: location,
        notes: notes,
      };

      return { ...state, [id]: newRider };
    }

    case CONSTANTS.DELETE_RIDER: {
      const id = action.payload.id

      const newState = { ...state }
      delete newState[id];
      return newState;
    }

    default:
      return state;
  }
};

export default ridersReducer;
