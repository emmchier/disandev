import styled, { css } from 'styled-components';

export interface ContainerProps {
  size: 'sm' | 'md' | 'lg' | 'none';
}

const styledSizes = (size: string) =>
  ({
    sm: css`
      max-width: 767px;

      @media only screen and (${({ theme }) => theme.breakpoints.tabletLandscape}) {
        max-width: 600px;
      }

      @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
        max-width: 550px;
      }

      @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
        padding: 0 ${({ theme }) => theme.spacing(5)};
        max-width: 100%;
      }
    `,
    md: css`
      max-width: 1500px;

      @media only screen and (${({ theme }) => theme.breakpoints.tabletLandscape}) {
        padding: 0 ${({ theme }) => theme.spacing(15)};
      }

      @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
        padding: 0 ${({ theme }) => theme.spacing(8)};
      }

      @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
        padding: 0 ${({ theme }) => theme.spacing(5)};
      }
    `,
    lg: css`
      // same as full
      max-width: 100%;
      padding: 0 ${({ theme }) => theme.spacing(8)} !important;

      @media only screen and (${({ theme }) => theme.breakpoints.tabletLandscape}) {
        max-width: 1700px;
      }

      @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
        padding: 0 ${({ theme }) => theme.spacing(5)} !important;
      }
    `,
    none: css`
      width: 100% !important;
    `,
  }[size]);

export const Content = styled.div<ContainerProps>`
  ${({ size }) => styledSizes(size)};
  margin: 0 auto;
  padding: 0;
`;
