import styled, { css } from 'styled-components';

interface SidenavProps {
  isShowing?: boolean;
}

export const MenuContent = styled.div<SidenavProps>`
  width: 15%;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.white};
  padding: ${({ theme }) => theme.spacing(10)};
  position: fixed;
  top: 0;
  ${({ isShowing }) =>
    isShowing
      ? css`
          right: 0;
          transition: 0.3s;
          z-index: 0;
          box-shadow: ${({ theme }) => theme.shadow.main};
          z-index: 999;

          @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
            width: 100%;
          }
        `
      : css`
          right: -100%;
          transition: 0.3s;
          box-shadow: none;
        `};

  @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
    width: 50%;
  }

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

  &:hover {
    opacity: 0.7;
  }
`;

export const Content = styled.div`
  height: 100vh;
  width: 100% !important;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  div {
    width: 100%;
  }

  button {
    margin: ${({ theme }) => theme.spacing(10)} 0;

    @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
      width: 100%;
    }
  }

  ul {
    li:nth-child(6) {
      display: none;
    }
  }
`;

export const SocialMediaContent = styled.div`
  ul {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
      justify-content: space-between;
    }
  }
`;
