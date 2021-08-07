import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Email, Username } from "./actions/index";

const Input = () => {
  const userName = useSelector((state) => state.onChange.userName);
  const email = useSelector((state) => state.onChange.email);

  const dispatch = useDispatch();

  return (
    <div className="tbxs-data">
      <div className="container">
        <div className="data-entry">
          <h1>Enter Data here</h1>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => dispatch(Username(e.target.value))}
          />
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => dispatch(Email(e.target.value))}
          />
        </div>
        <h1 className="heading">Display area</h1>
        <h2>
          Username: <span>{userName}</span>
        </h2>

        <h2>
          Email: <span>{email}</span>
        </h2>
      </div>
    </div>
  );
};

export default Input;
