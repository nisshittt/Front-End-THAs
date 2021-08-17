interface ActionType {
  type: string;
  payload: number;
}

const countReducer = (state = 0, action: ActionType) => {
  switch (action.type) {
    case "INC_COUNTER":
      return state + action.payload;
    case "DEC_COUNTER":
      return state - action.payload;

    default:
      return state;
  }
};

export default countReducer;
