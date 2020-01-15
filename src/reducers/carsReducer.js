import { CONSTANTS } from "../actions";

let carID = 4;
let riderID = 7;

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
    riders: [
      `rider-${0}`
    ],
    notes: "",
  },
};

const carsReducer = (state = initialState, action) => {

  switch (action.type) {
    case CONSTANTS.ADD_CAR: {
      const { driverName } = action.payload
      const newCar = {
        id: `car-${carID}`,
        driverName: driverName,
        riders: []
      };

      carID++;

      return [...state, newCar];
    }

    case CONSTANTS.ADD_RIDER: {
      const { riderName, lunch, location, notes } = action.payload
      const newRider = {
        id: `rider-${riderID}`,
        name: riderName,
        lunch: lunch,
        location: location,
        notes: notes,
      };

      riderID++;

      const newState = state.map(car => {
        if (car.id === `car-${0}`) {
          return {
            ...car,
            riders: [...car.riders, newRider]
          };
        } else {
          return car
        }
      });

      return newState;
    }

    case CONSTANTS.DRAG_HAPPENED: {
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId,
        type,
      } = action.payload;

      const newState = [...state]

      if (type === "car") {
        const car = newState.splice(droppableIndexStart, 1);
        newState.splice(droppableIndexEnd, 0, ...car);
        return newState;
      }

      if (droppableIdStart === droppableIdEnd) {
        const car = state.find(car => droppableIdStart === car.id);
        const rider = car.riders.splice(droppableIndexStart, 1);
        car.riders.splice(droppableIndexEnd, 0, ...rider);
      } else {
        const carStart = state.find(car => droppableIdStart === car.id);
        const rider = carStart.riders.splice(droppableIndexStart, 1);
        const carEnd = state.find(car => droppableIdEnd === car.id);
        carEnd.riders.splice(droppableIndexEnd, 0, ...rider);
      }

      return newState;
    }

    default:
      return state;
  }
};

export default carsReducer;