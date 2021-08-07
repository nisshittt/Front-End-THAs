import { combineReducers } from "redux";
import todos from "./todos";
import activeFilter from "./activeFilter";

export default combineReducers({
  todos,
  activeFilter
});
