import { createReducer } from "redux-act";
import { setActiveFilter } from "../actions/activeFilter";

export default createReducer(
  {
    [setActiveFilter]: (state, filter) => filter
  },
  "SHOW_ALL"
);
