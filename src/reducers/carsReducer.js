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
        id: 0,
        name: "Patie",
        location: "South",
        notes: "PH",
        lunch: 1
      }
    ]
  },
  {
    title: "Jeff Huang",
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
        id: 0,
        name: "Patie",
        location: "South",
        notes: "PH",
        lunch: 1
      }
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