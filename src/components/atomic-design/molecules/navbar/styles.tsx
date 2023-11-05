import styled, { css } from 'styled-components';
import { fadeIn } from '../../../ui/animations';

interface NavbarProps {
  isFixed?: boolean;
}

export const Header = styled.header`
  position: fixed;
  z-index: 6;
  top: 0;
  width: 100%;
  padding: 0;
  margin: 0;

  button {
    padding: 0 !important;
    width: 40px;
    background-color: transparent !important;
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    z-index: 99;
  }
`;

export const Background = styled.div<NavbarProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  transition: all 0.2s ease-in;
  ${({ isFixed }) =>
    isFixed
      ? css`
          background-color: rgba(255, 255, 255, 0.8);
          -webkit-animation: ${fadeIn} 0.2s;
          -moz-animation: ${fadeIn} 0.2s;
          -ms-animation: ${fadeIn} 0.2s;
          -o-animation: ${fadeIn} 0.2s;
          animation: ${fadeIn} 0.2s;
          transition: all 0.2s ease-in;
          box-shadow: ${({ theme }) => theme.shadow.navbar};
        `
      : css`
          background-color: transparent;
          transition: all 0.2s ease-in;
        `};
`;

export const Content = styled.div<NavbarProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 2;
  transition: all 0.2s ease-in;

  svg {
    a {
      padding: 0;
      margin: 0;
    }
  }
  ${({ isFixed }) =>
    isFixed
      ? css`
          figure {
            svg {
              transform: scale(0.8);
              transition: all 0.2s ease-in;
              margin: ${({ theme }) => theme.spacing(4)} 0;
              transform-origin: 0% 100%;
            }
          }
        `
      : css`
          figure {
            svg {
              transform: scale(1);
              transition: all 0.2s ease-in;
              margin: ${({ theme }) => theme.spacing(6)} 0;
            }
          }
        `};

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    figure {
      display: flex;
      svg {
        transform: scale(0.8);
        transition: all 0.2s ease-in;
        margin: ${({ theme }) => theme.spacing(3)} 0;
        transform-origin: 0% 0%;
      }
    }
  }
`;

export const Navigation = styled.div`
  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const Burger = styled.div`
  display: none;

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    display: block;
  }
`;
