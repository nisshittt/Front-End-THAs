import React from "react";
import PropTypes from "prop-types";
import { DefaultButton } from "../core/Buttons";

const Link = ({ active, onClick, children }) => (
  <DefaultButton onClick={onClick} active={active}>
    {children}
  </DefaultButton>
);

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default Link;
