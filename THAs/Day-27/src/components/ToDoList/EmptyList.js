import React from "react";
import styled from "styled-components";

const EmptyList = ({ className, label }) => (
  <li className={className}>{label}</li>
);

export default styled(EmptyList)`
  color: #767676;
  padding: 16px 8px;
  width: 100%;
`;
