import styled, { css } from 'styled-components';

type OverlayI = {
  isShowing?: boolean;
};

export const Content = styled.div<OverlayI>`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 99;
  opacity: 0.5;
  ${({ isShowing }) =>
    isShowing
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
