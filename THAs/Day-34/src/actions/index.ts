const IncCounter = (num: number) => {
  return {
    type: "INC_COUNTER",
    payload: num
  };
};

const DecCounter = (num: number) => {
  return {
    type: "DEC_COUNTER",
    payload: num
  };
};

const AddNote = (name: string) => {
  return {
    type: "ADD_NOTE",
    payload: name
  };
};

const DeleteNote = (id: number) => {
  return {
    type: "DELETE_NOTE",
    payload: id
  };
};

export { IncCounter, DecCounter, AddNote, DeleteNote };
