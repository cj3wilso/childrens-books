import styled, { keyframes } from "styled-components";

/* KEYFRAMES */
const rotate = keyframes`
from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
`;

/* OBJECTS */
export const GrassContainer = styled.div`
  width: 110%;
  left: -5px;
  border-color: #47b93b transparent transparent transparent;
  border-radius: 46%/100px 89px 0px 34px;
  transform: ${rotate}(-4deg);
  height: 200px;
  background: linear-gradient(#bfea7f, white);
  position: fixed;
  z-index: -1;
  bottom: -8%;
`;
