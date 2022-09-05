import styled, { css } from 'styled-components';

type OverlayI = {
  isShowing?: boolean;
  opacity?: number;
};

export const Content = styled.div<OverlayI>`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 999;
  opacity: ${({ opacity }) => opacity};
  ${({ isShowing }) =>
    isShowing === true
      ? css`
          animation: fadeIn 0.2s;
          display: inherit;
          background-color: ${({ theme }) => theme.color.overlay};
        `
      : css`
          animation: fadeOut 0.2s;
          display: none;
        `};

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.5;
    }
  }

  @keyframes fadeOut {
    0% {
      opacity: 0.5;
    }
    100% {
      opacity: 0;
    }
  }
`;
