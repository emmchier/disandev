import { keyframes } from 'styled-components';

export const fadeIn = keyframes`
  from {
      opacity:0;
  }
  to {
      opacity:1;
  }
`;

export const fadeOut = keyframes`
  from {
      opacity:1;
  }
  to {
      opacity:0;
  }
`;

export const expand = keyframes`
  0% {
      height: 0;
      transition: all 0.5s ease-in;
  }
  100% {
      height: 20vh;
      transition: all 0.5s ease-in;
  }
`;
