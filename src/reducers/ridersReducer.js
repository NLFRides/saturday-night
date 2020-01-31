import { CONSTANTS } from "../actions";
import { SOUTH, NORTH, OC } from "../constants";

const initialState = {
  "rider-0": {
    id: `rider-${0}`,
    name: "Jabon",
    lunch: 0,
    location: SOUTH,
    notes: "Jabon Notes",
  },
  "rider-1": {
    id: `rider-${1}`,
    name: "Jefferson",
    lunch: 1,
    location: NORTH,
    notes: "Jefferson Notes",
  },
  "rider-2": {
    id: `rider-${2}`,
    name: "Nathan",
    lunch: 1,
    location: NORTH,
    notes: "Nathan Notes",
  },
  "rider-3": {
    id: `rider-${3}`,
    name: "Tiktok",
    lunch: 1,
    location: OC,
    notes: "Tiktok Notes",
  },
};

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
