import { createAction } from "redux-act";

export const addToDo = createAction("Add ToDo", text => text);

export const toggleToDo = createAction("Toggle ToDo", id => id);
