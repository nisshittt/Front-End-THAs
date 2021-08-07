import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import AddToDo from "./components/AddToDo";
import ToDoList from "./components/ToDoList";
import Filters from "./components/Filters";

import "./reset.css";
import "./base.css";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <div className="App">
      <AddToDo />
      <Filters />
      <ToDoList />
    </div>
  );
}

const rootElement = document.getElementById("root");

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
