import styled, { keyframes } from "styled-components";

const slide = keyframes`
  0% {
    transform:translateX(-25%);
  }
  100% {
    transform:translateX(25%);
  }
`;

const Background = styled.div`
  animation: ${slide} 3s ease-in-out infinite alternate;
  background-image: linear-gradient(65deg, tomato 50%, aquamarine 50%);
  bottom: 0;
  left: -50%;
  opacity: 0.5;
  position: fixed;
  right: -50%;
  top: 0;
  z-index: -1;
`;

export default Background;
