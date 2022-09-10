import styled, { css } from 'styled-components';

export interface ContainerProps {
  size: 'sm' | 'md' | 'lg' | 'none';
}

const styledSizes = (size: string) =>
  ({
    sm: css`
      margin: 0 ${({ theme }) => theme.spacing(20)};
      padding: 0 !important;

      @media only screen and (${({ theme }) => theme.breakpoints.tabletLandscape}) {
        margin: 0 ${({ theme }) => theme.spacing(20)} !important;
        padding: 0 !important;
      }

      @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
        margin: 0 ${({ theme }) => theme.spacing(60)} !important;
      }

      @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
        margin: 0 auto !important;
        padding: 0 !important;
      }
    `,
    md: css`
      margin: 0 ${({ theme }) => theme.spacing(20)};

      @media only screen and (${({ theme }) => theme.breakpoints.tabletLandscape}) {
        margin: 0 ${({ theme }) => theme.spacing(15)};
      }

      @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
        margin: 0 auto !important;
        padding: 0 ${({ theme }) => theme.spacing(5)} !important;
      }
    `,
    lg: css`
      // same as full
      margin: 0 ${({ theme }) => theme.spacing(8)} !important;

      @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
        margin: 0 auto !important;
        padding: 0 ${({ theme }) => theme.spacing(5)} !important;
      }
    `,
    none: css`
      margin: 0 !important;
    `,
  }[size]);

export const Content = styled.div<ContainerProps>`
  width: auto;
  ${({ size }) => styledSizes(size)};
`;
