import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ToDo = ({ className, onClick, completed, text }) => (
  <li className={className} onClick={onClick}>
    {text}
  </li>
);

ToDo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default styled(ToDo)`
  background-color: #fff;
  cursor: pointer;
  padding: 16px 8px 16px 24px;
  position: relative;
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
  width: 100%;

  &:hover {
    background-color: #f8f8f8;
  }

  &:before {
    content: "";
    width: 10px;
    height: 10px;
    border: 2px solid #6200f2;
    border-radius: 5px;
    position: absolute;
    left: 4px;
    top: 20px;
  }

  &:after {
    content: "";
    ${({ completed }) => completed && "background-color: #767676"};
    height: 2px;
    top: 24px;
    left: 20px;
    right: 4px
    position: absolute;
  }
`;
