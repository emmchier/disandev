import styled, { css } from 'styled-components';

interface SidenavProps {
  isShowing?: boolean;
}

export const MenuContent = styled.div<SidenavProps>`
  position: fixed;
  background-color: ${({ theme }) => theme.color.white};

  ${({ isShowing }) =>
    isShowing
      ? css`
          right: 0;
          transition: 0.2s;
          box-shadow: ${({ theme }) => theme.shadow.main};
          z-index: 999;
          background-color: ${({ theme }) => theme.color.white};

          @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
            width: 100%;
          }
        `
      : css`
          right: -100%;
          transition: 0.2s;
          box-shadow: none;
          background-color: ${({ theme }) => theme.color.white};
        `};

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const CloseBtn = styled.div`
  cursor: pointer;
  position: absolute;
  z-index: 999;
  margin: ${({ theme }) => theme.spacing(10)};

  &:hover {
    opacity: 0.7;
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    margin: ${({ theme }) => theme.spacing(5)};
  }
`;

export const Content = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 ${({ theme }) => theme.spacing(50)} 0 ${({ theme }) => theme.spacing(10)} !important;

  div {
    button {
      width: 100%;
      margin: ${({ theme }) => theme.spacing(10)} 0;
    }
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 !important;
  }
`;

export const SocialMediaContent = styled.div`
  ul {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
  }
`;
