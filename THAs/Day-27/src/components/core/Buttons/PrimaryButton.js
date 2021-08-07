import styled from "styled-components";
import Base from "./Base";

const PrimaryButton = styled(Base)`
  background-color: #6200ee;
  color: #fff;

  &:hover,
  &:focus {
    background-color: #3d00e0;
  }

  &:disabled {
    background-color: #5300e8;
    color: #b794f6;
  }

  ${props => props.active && "background-color: #5300e8;"}
`;

PrimaryButton.displayName = "PrimaryButton";
export default PrimaryButton;
