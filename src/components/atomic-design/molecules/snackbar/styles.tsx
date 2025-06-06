import styled, { css } from 'styled-components';

interface SnackbarProps {
  position: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'bottomFull';
  show: boolean;
  background: string;
}

const positionStyles = (position: string) =>
  ({
    topLeft: css`
      top: 0;
      left: 0;
      max-width: ${({ theme }) => theme.spacing(200)};
    `,
    topRight: css`
      top: 0;
      right: 0;
      max-width: ${({ theme }) => theme.spacing(200)};
    `,
    bottomLeft: css`
      bottom: 0;
      left: 0;
      max-width: ${({ theme }) => theme.spacing(200)};
    `,
    bottomRight: css`
      bottom: 0;
      right: 0;
      max-width: ${({ theme }) => theme.spacing(700)} !important;

      p {
        max-width: 100% !important;
      }

      @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
        width: 100% !important;
        height: 4rem !important;
        margin: 0;
        box-sizing: border-box;

        p {
          margin: 0 !important;
        }
      }
    `,
    bottomFull: css`
      bottom: 0;
      width: 100% !important;
      margin: 0 !important;
      border-radius: 0 !important;
      padding: 0 !important;
      border: 0 !important;
      background-color: ${({ theme }) => theme.color.black} !important;

      svg {
        filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(11%) hue-rotate(331deg)
          brightness(101%) contrast(101%) !important;
      }

      button {
        transform: translateX(-5px);

        &:hover {
          svg {
            filter: brightness(0) saturate(100%) invert(0%) sepia(59%) saturate(15%)
              hue-rotate(272deg) brightness(86%) contrast(103%) !important;
          }
        }
      }
    `,
  }[position]);

const backgroundStyles = (background: string) =>
  ({
    light: css`
      background-color: ${({ theme }) => theme.color.white} !important;

      p {
        color: ${({ theme }) => theme.color.black} !important;
      }

      a {
        color: ${({ theme }) => theme.color.primary.main} !important;
        &:hover {
          text-decoration: underline;
        }
      }
    `,
    dark: css`
      background-color: ${({ theme }) => theme.color.black} !important;

      p {
        color: ${({ theme }) => theme.color.white} !important;
      }
    `,
  }[background]);

export const Content = styled.div<SnackbarProps>`
  ${({ show }) =>
    !show
      ? css`
          display: none;
          opacity: 0;
          transition: all 0.2s ease-in-out;
          z-index: 0 !important;
          transform: translateY(20px);
        `
      : css`
          display: block;
          opacity: 1;
          transition: all 0.2s ease-in-out;
          z-index: 99999 !important;
          transform: translateY(0);
        `};
  ${({ position }) => positionStyles(position)};
  ${({ background }) => backgroundStyles(background)};
  transition: all 0.2s ease-in-out;
  position: fixed;
  margin: ${({ theme }) => theme.spacing(10)};
  padding: ${({ theme }) => theme.spacing(5)};
  box-shadow: ${({ theme }) => theme.shadow.main};
  border-radius: ${({ theme }) => theme.border.radius.main};
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.color.disabled};

  p {
    margin: 0 ${({ theme }) => theme.spacing(5)};
    font-size: ${({ theme }) => theme.font.size.small};
  }

  a {
    margin-left: ${({ theme }) => theme.spacing(3)};
  }

  @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
    p {
      max-width: 50%;
      line-height: ${({ theme }) => theme.font.lineHeight.smallX};
    }
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    margin-top: 20px;

    a {
      margin-left: 0;
    }

    p {
      margin-top: ${({ theme }) => theme.spacing(5)};
      max-width: 100%;
    }

    button {
      margin: ${({ theme }) => theme.spacing(5)} !important;
    }
  }
`;
