import { CONSTANTS } from "../actions";

let carId = 4;

const initialState = [
  {
    driverName: "Jason Huang",
    id: 0,
    riders: [
      {
        id: 0,
        name: "Esthee",
        location: "South",
        notes: "EL",
        lunch: 0
      },
      {
        id: 1,
        name: "Patie",
        location: "South",
        notes: "PH",
        lunch: 1
      },
      {
        id: 2,
        name: "George",
        location: "North",
        notes: "GH",
        lunch: 1
      }
    ]
  },
  {
    driverName: "Jeff Huang",
    id: 1,
    riders: [
      {
        id: 0,
        name: "Katrono",
        location: "South",
        notes: "EL",
        lunch: 0
      },
      {
        id: 1,
        name: "BewhY",
        location: "South",
        notes: "BY",
        lunch: 1
      }
    ]
  },
  {
    driverName: "Kyumin Huang",
    id: 2,
    riders: [
      {
        id: 0,
        name: "Kristine",
        location: "North",
        notes: "KY",
        lunch: 0
      },
      {
        id: 1,
        name: "Pristine",
        location: "South",
        notes: "GG",
        lunch: 1
      }
    ]
  },
  {
    driverName: "Not Yet Assigned",
    id: 3,
    riders: [
    ]
  }
];

const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_CAR:
      const { driverName, lunch, notes } = action.payload;

      console.log(driverName);

      const newCar = {
        driverName: driverName,
        id: carId++,
        riders: []
      }
      return [...state, newCar]
    default:
      return state;
  }
};

export default carsReducer;