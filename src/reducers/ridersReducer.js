import {
  CONSTANTS
} from "../actions";

const initialState = {
  "rider-0": {
    id: `rider-${0}`,
    name: "Jabon",
    lunch: 0,
    location: "S",
    notes: "Jabon Notes",
  },
  "rider-1": {
    id: `rider-${1}`,
    name: "Jefferson",
    lunch: 1,
    location: "N",
    notes: "Jefferson Notes",
  },
  "rider-2": {
    id: `rider-${2}`,
    name: "Nathan",
    lunch: 1,
    location: "N",
    notes: "Nathan Notes",
  },
  "rider-3": {
    id: `rider-${3}`,
    name: "Coogie",
    lunch: 1,
    location: "S",
    notes: "Coogie Notes",
  },
};

const ridersReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_RIDER: {
      const {
        id,
        riderName,
        lunch,
        location,
        notes
      } = action.payload

      const newRider = {
        id: id,
        name: riderName,
        lunch: lunch,
        location: location,
        notes: notes,
      };

      return { ...state, [id]: newRider };
    }
  }
};

export default ridersReducer;
