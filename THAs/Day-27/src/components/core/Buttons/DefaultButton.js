import styled from "styled-components";
import Base from "./Base";

const DefaultButton = styled(Base)`
  background-color: #03dac4;
  color: #fff;

  &:hover,
  &:focus {
    background-color: #00b798;
  }

  &:disabled {
    background-color: #009a77;
    color: #92e9dc;
  }

  ${props => props.active && "background-color: #009a77;"}
`;

DefaultButton.displayName = "DefaultButton";
export default DefaultButton;
