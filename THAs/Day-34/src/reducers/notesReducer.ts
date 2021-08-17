interface addNoteType {
  type: "ADD_NOTE";
  payload: string;
}

interface deleteNoteType {
  type: "DELETE_NOTE";
  payload: number;
}

type ActionType = addNoteType | deleteNoteType;

const notesReducer = (state: string[] = [], action: ActionType) => {
  switch (action.type) {
    case "ADD_NOTE":
      return [...state, action.payload];
    case "DELETE_NOTE":
      return state.filter(
        (note: string, idx: number) => idx !== action.payload
      );
    default:
      return state;
  }
};

export default notesReducer;
