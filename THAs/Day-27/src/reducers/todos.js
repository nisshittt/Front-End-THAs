import { createReducer } from "redux-act";
import { addToDo, toggleToDo } from "../actions/todos";

let nextToDoID = 0;

export default createReducer(
  {
    [addToDo]: (state, text) => [
      ...state,
      {
        id: nextToDoID++,
        text,
        completed: false
      }
    ],
    [toggleToDo]: (state, id) =>
      state.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
  },
  []
);
