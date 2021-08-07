import React from "react";
import "./day26.css";
import store from "./sat";
import { Provider } from "react-redux";
import Input from "./component";

const Day26 = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Input />
      </div>
    </Provider>
  );
};

export default Day26;
