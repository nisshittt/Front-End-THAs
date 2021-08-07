import { createAction } from "redux-act";

export const setActiveFilter = createAction(
  "Set Active Filter",
  filter => filter
);
