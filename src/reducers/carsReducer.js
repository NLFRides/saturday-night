const initialState = [
  {
    title: "Jason Huang",
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
    title: "Jeff Huang",
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
    title: "Kyumin Huang",
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
    title: "Free Riders",
    id: 3,
    riders: [
    ]
  }
];

const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default carsReducer;