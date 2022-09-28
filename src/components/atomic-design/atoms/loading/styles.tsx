import styled, { css } from 'styled-components';

type ContentPropTypes = {
  onShowing: boolean;
};

interface AnimationContainerI {
  isLoading?: boolean;
}

interface SendedI {
  isSended: boolean;
}

export const Content = styled.div<ContentPropTypes>`
  background-color: ${({ theme }) => theme.color.white};
  width: 100%;
  height: 100vh;
  opacity: 0;
  top: 0;
  display: flex;
  z-index: 9;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  ${({ onShowing }) =>
    onShowing === true
      ? css`
          opacity: 1;
          display: flex;
        `
      : css`
          opacity: 0;
          display: none;
        `}

  h5 {
    font-size: ${({ theme }) => theme.font.size.largeX};
    margin-top: ${({ theme }) => theme.spacing(8)} !important;
  }
`;

export const SendedMessage = styled.div<SendedI>`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.color.text.primary};
  transition: ${({ theme }) => theme.transition.main};

  p {
    font-size: ${({ theme }) => theme.font.size.medium};
    margin-top: ${({ theme }) => theme.spacing(1)};
    color: ${({ theme }) => theme.color.text.primary};
  }

  button {
    margin-top: ${({ theme }) => theme.spacing(8)};
  }
  ${({ isSended }) =>
    isSended === true
      ? css`
          opacity: 1;
          transition: ${({ theme }) => theme.transition.main};
        `
      : css`
          opacity: 0;
          transition: ${({ theme }) => theme.transition.main};
        `}
`;

export const AnimationContainer = styled.div<AnimationContainerI>`
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @keyframes scaling {
    0%,
    100% {
      transform: scale(0.4);
    }
    40% {
      transform: scale(0.8);
    }
    50% {
      transform: scale(1);
    }
  }

  div {
    ${({ isLoading }) =>
      isLoading === true
        ? css`
            animation: scaling 1s ease-in-out infinite;
            transform: scale(0);
          `
        : css`
            animation: none;
            transform: scale(1);
          `}
    height: 12px;
    width: 12px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.primary.main};
    display: inline-block;
    margin: 0.3rem;
  }

  div:nth-child(0) {
    animation-delay: 0.2s;
  }
  div:nth-child(1) {
    animation-delay: 0.8s;
  }
  div:nth-child(2) {
    animation-delay: 0.4s;
  }
`;
