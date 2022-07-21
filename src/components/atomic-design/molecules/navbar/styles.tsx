import styled, { css } from 'styled-components';
import { fadeIn } from '../../../ui/animations';

interface NavbarProps {
  isFixed?: boolean;
}

export const Header = styled.div`
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
`;

export const Background = styled.div<NavbarProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  transition: all ease-in-out;
  ${({ isFixed }) =>
    isFixed
      ? css`
          background-color: rgba(255, 255, 255, 0.8);
          -webkit-animation: ${fadeIn} 0.2s;
          -moz-animation: ${fadeIn} 0.2s;
          -ms-animation: ${fadeIn} 0.2s;
          -o-animation: ${fadeIn} 0.2s;
          animation: ${fadeIn} 0.2s;
        `
      : css`
          background-color: transparent;
        `};
`;

export const Content = styled.div<NavbarProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: ${({ theme }) => theme.spacing(8)} 0;
  position: relative;
  z-index: 2;
  transition: ${({ theme }) => theme.transition};
  ${({ theme, isFixed }) =>
    isFixed
      ? css`
          margin: ${theme.spacing(5)} 0;
          transition: ${({ theme }) => theme.transition};
        `
      : css`
          margin: ${theme.spacing(8)} 0;
          transition: ${({ theme }) => theme.transition};
        `};

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    margin: ${({ theme }) => theme.spacing(3)} 0;

    svg {
      width: ${({ theme }) => theme.spacing(27)};
    }
  }
`;
