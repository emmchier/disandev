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

export const swing = keyframes`
  0% {
    transform: translateY(3px);
  }

  20% {
    transform: translateY(-20px);
  }

  30% {
    transform: translateY(-10px);
  }

  50% {
    transform: translateY(3px);
  }

  80% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(3px);
  }
`;
