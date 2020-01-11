import { CONSTANTS } from "../actions";

let carID = 4;
let riderID = 7;

const initialState = [
  {
    driverName: "Not Yet Assigned",
    id: `car-${0}`,
    riders: [
    ]
  },
  {
    driverName: "Jason Huang",
    id: `car-${1}`,
    riders: [
      {
        id: `rider-${0}`,
        name: "Esthee",
        lunch: 0,
        location: "South",
        notes: "EL",
      },
      {
        id: `rider-${1}`,
        name: "Patie",
        lunch: 1,
        location: "South",
        notes: "PH",
      },
      {
        id: `rider-${2}`,
        name: "George",
        lunch: 1,
        location: "North",
        notes: "GH",
      }
    ]
  },
  {
    driverName: "Jeff Huang",
    id: `car-${2}`,
    riders: [
      {
        id: `rider-${3}`,
        name: "Katrono",
        lunch: 0,
        location: "South",
        notes: "EL",
      },
      {
        id: `rider-${4}`,
        name: "BewhY",
        lunch: 1,
        location: "South",
        notes: "BY",
      }
    ]
  },
  {
    driverName: "Kyumin Huang",
    id: `car-${3}`,
    riders: [
      {
        id: `rider-${5}`,
        name: "Kristine",
        lunch: 0,
        location: "North",
        notes: "KY",
      },
      {
        id: `rider-${6}`,
        name: "Pristine",
        lunch: 1,
        location: "South",
        notes: "GG",
      }
    ]
  },
];

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