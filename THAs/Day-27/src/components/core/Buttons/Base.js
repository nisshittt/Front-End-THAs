import styled from "styled-components";

const Button = styled.button`
  -webkit-appearance: none;
  border: none;
  border-radius: 4px;
  font: inherit;
  display: inline-block;
  line-height: 1.5;
  padding: 8px 16px;
  margin: 0;
  overflow: hidden;
  text-transform: none;
  white-space: nowrap;

  &:hover,
  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
  }

  ${props => props.active && "pointer-events: none;"}
`;

export default Button;
