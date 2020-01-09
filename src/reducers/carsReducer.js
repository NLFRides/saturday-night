import { CONSTANTS } from "../actions";

let carID = 4;
let riderID = 7;

const initialState = [
  {
    driverName: "Jason Huang",
    id: 0,
    riders: [
      {
        id: 0,
        name: "Esthee",
        lunch: 0,
        location: "South",
        notes: "EL",
      },
      {
        id: 1,
        name: "Patie",
        lunch: 1,
        location: "South",
        notes: "PH",
      },
      {
        id: 2,
        name: "George",
        lunch: 1,
        location: "North",
        notes: "GH",
      }
    ]
  },
  {
    driverName: "Jeff Huang",
    id: 1,
    riders: [
      {
        id: 3,
        name: "Katrono",
        lunch: 0,
        location: "South",
        notes: "EL",
      },
      {
        id: 4,
        name: "BewhY",
        lunch: 1,
        location: "South",
        notes: "BY",
      }
    ]
  },
  {
    driverName: "Kyumin Huang",
    id: 2,
    riders: [
      {
        id: 5,
        name: "Kristine",
        lunch: 0,
        location: "North",
        notes: "KY",
      },
      {
        id: 6,
        name: "Pristine",
        lunch: 1,
        location: "South",
        notes: "GG",
      }
    ]
  },
  {
    driverName: "Not Yet Assigned",
    id: -1,
    riders: [
    ]
  }
];

const carsReducer = (state = initialState, action) => {

  const payload = action.payload

  switch (action.type) {
    case CONSTANTS.ADD_CAR:
      const newCar = {
        id: carID,
        driverName: payload.driverName,
        riders: []
      };

      carID++;

      return [...state, newCar];

    case CONSTANTS.ADD_RIDER:

      const newRider = {
        id: riderID++,
        name: payload.riderName,
        lunch: payload.lunch,
        location: payload.location,
        notes: payload.notes,
      };

      const newState = state.map(car => {
        if (car.id === -1) {
          return {
            ...car,
            riders: [...car.riders, newRider]
          };
        } else {
          return car
        }
      });

      return newState;

    default:
      return state;
  }
};

export default carsReducer;