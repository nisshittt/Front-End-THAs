const initialState = {
  userName: "",
  email: ""
};

const onChange = (state = initialState, action) => {
  switch (action.type) {
    case "USERNAME":
      return {
        ...state,
        userName: action.payload
      };

    case "EMAIL":
      return {
        ...state,
        email: action.payload
      };

    default:
      return state;
  }
};

export default onChange;
