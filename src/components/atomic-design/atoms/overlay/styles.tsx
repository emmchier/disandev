import styled from 'styled-components';

type OverlayI = {
  isShowing?: boolean;
};

export const Content = styled.div<OverlayI>`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 99;
  background-color: ${({ theme }) => theme.color.black};
  animation: fadeIn 0.2s;
  opacity: 0.3;
  ${({ isShowing }) =>
    isShowing
      ? 'animation: fadeIn .2s; display: inherit; '
      : 'animation: fadeOut .2s; display: none;'};

  @keyframes fadeIn {
    0% {
      opacity: 0;
      backdrop-filter: blur(9px);
    }
    100% {
      opacity: 0.5;
      backdrop-filter: blur(9px);
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
