import styled, { css } from 'styled-components';

interface ButtonI {
  color?: string;
  variant?: string;
  fullWidth?: boolean;
  ariaLabel?: string;
  iconRight?: boolean;
  iconLeft?: boolean;
}

const colorStyles = (color: string) =>
  ({
    primary: css`
      color: ${({ theme }) => theme.color.text.primary};
      background-color: ${({ theme }) => theme.color.primary.main};
      border: 2px solid ${({ theme }) => theme.color.primary.main};
    `,
    secondary: css`
      color: ${({ theme }) => theme.color.text.secondary};
      background-color: ${({ theme }) => theme.color.secondary.main};
      border: 2px solid ${({ theme }) => theme.color.secondary.main};
    `,
  }[color]);

const variantStyles = (variant: string) =>
  ({
    contained: css`
      color: ${({ theme }) => theme.color.white};
      &:hover {
        background-color: ${({ theme }) => theme.color.primary.dark};
        border: 2px solid ${({ theme }) => theme.color.primary.dark};
      }
      &:active {
        background-color: ${({ theme }) => theme.color.primary.dark};
        border: 2px solid ${({ theme }) => theme.color.primary.dark};
      }
      &:disabled {
        border: 2px solid ${({ theme }) => theme.color.disabled};
        background-color: ${({ theme }) => theme.color.disabled};
        color: ${({ theme }) => theme.color.text.secondary};
      }

      @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
        &:hover,
        &:active {
          background-color: ${({ theme }) => theme.color.primary.main};
          border: 2px solid ${({ theme }) => theme.color.primary.main};
        }
      }

      @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
        &:hover,
        &:active {
          background-color: ${({ theme }) => theme.color.primary.main};
          border: 2px solid ${({ theme }) => theme.color.primary.main};
        }
      }
    `,
    outlined: css`
      background-color: transparent;
      &:hover {
        background-color: ${({ theme }) => theme.color.primary.main};
        color: ${({ theme }) => theme.color.white};
      }
      &:active {
        border: 2px solid ${({ theme }) => theme.color.primary.dark};
        background-color: ${({ theme }) => theme.color.primary.dark};
      }
      &:disabled {
        opacity: 0.5;
        background-color: transparent;
        color: ${({ theme }) => theme.color.text.primary};
      }

      @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
        &:hover,
        &:active {
          border: 2px solid ${({ theme }) => theme.color.primary.main};
          background-color: transparent;
          color: ${({ theme }) => theme.color.primary.main};
        }
      }

      @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
        &:hover,
        &:active {
          border: 2px solid ${({ theme }) => theme.color.primary.main};
          background-color: transparent;
          color: ${({ theme }) => theme.color.primary.main};
        }
      }
    `,
    text: css`
      background-color: transparent;
      border: 2px solid transparent;
      padding: 0;
      color: ${({ theme }) => theme.color.black} !important;

      svg {
        filter: brightness(0) saturate(100%) invert(37%) sepia(62%) saturate(1324%)
          hue-rotate(221deg) brightness(91%) contrast(107%) !important;
      }

      &:hover {
        svg {
          filter: brightness(0) saturate(100%) invert(37%) sepia(62%) saturate(1324%)
            hue-rotate(221deg) brightness(91%) contrast(107%) !important;
        }
      }

      &:active {
        color: ${({ theme }) => theme.color.black};
      }

      &:disabled {
        color: ${({ theme }) => theme.color.disabled};

        span {
          &:after {
            border: 1px solid ${({ theme }) => theme.color.disabled};
          }

          &:hover:after {
            transform: scaleX(1);
          }
        }

        p {
          color: ${({ theme }) => theme.color.disabled};
        }
      }

      @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
        &:hover,
        &:active {
          color: ${({ theme }) => theme.color.primary.main};
          text-decoration: none;
        }
      }

      @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
        &:hover,
        &:active {
          color: ${({ theme }) => theme.color.primary.main};
          text-decoration: none;
        }
      }
    `,
    icon: css`
      background-color: transparent;
      border: 2px solid transparent;
      padding: 0;
      border-radius: ${({ theme }) => theme.border.radius.full};
      transition: ${({ theme }) => theme.transition};

      &:active {
        background-color: ${({ theme }) => theme.color.hoverButton};
      }

      &:disabled {
        color: ${({ theme }) => theme.color.disabled};
        text-decoration: none;
        background-color: transparent;
      }
    `,
  }[variant]);

export const Container = styled.button<ButtonI>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  color: ${({ theme }) => theme.color.white};
  padding: ${({ theme }) => `${theme.spacing(2)} ${theme.spacing(6)}`};
  font-size: ${({ theme }) => theme.font.size.small};
  line-height: ${({ theme }) => theme.font.lineHeight.medium};
  ${({ color }) => colorStyles(color as any)};
  ${({ variant }) => variantStyles(variant as any)};
  transition: 0.2s ease-in-out;
  font-family: ${({ theme }) => theme.font.family};

  &:hover,
  &:active {
    transition: 0.2s ease-in-out;

    svg {
      filter: brightness(0) invert(1);
    }
  }
  &:disabled {
    cursor: inherit;

    svg {
      filter: brightness(0) saturate(100%) invert(37%) sepia(62%) saturate(1324%) hue-rotate(221deg)
        brightness(91%) contrast(107%) !important;
    }
  }

  i:nth-child(1) {
    margin-right: ${({ iconRight }) => (iconRight ? '10px' : '0')};
  }

  i:nth-child(2) {
    margin-left: ${({ iconLeft }) => (iconLeft ? '10px' : '0')};
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.font.size.small};
    line-height: ${({ theme }) => theme.font.lineHeight.small};
  }
`;

export const IconLeft = styled.span`
  margin-right: ${({ theme }) => theme.spacing(2)};
`;

export const IconRight = styled.span`
  margin-left: ${({ theme }) => theme.spacing(2)};
  transform: translateY(2px);
`;
