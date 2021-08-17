import React from "react";
import "./style.css";
import { Provider } from "react-redux";
import store from "./store";
import NoteContainer from "./components/NoteContainer";

const Day34 = () => {
  return (
    <Provider store={store}>
      <div className="day34 bg-dark text-light ">
        <NoteContainer />
      </div>
    </Provider>
  );
};

export default Day34;
