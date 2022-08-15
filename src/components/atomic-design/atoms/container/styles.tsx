import styled, { css } from 'styled-components';

export interface ContainerProps {
  size: string;
}

const styledSizes = (size: string) =>
  ({
    sm: css`
      max-width: 1156px;
      @media only screen and (${({ theme }) => theme.breakpoints.desktop}) {
        max-width: 1156px;
        padding: 0;
      }
      @media only screen and (${({ theme }) => theme.breakpoints.tabletLandscape}) {
        max-width: 1156px;
        padding: 0 27px;
      }
      @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
        max-width: 1110px;
        padding: 0 27px;
      }
    `,
    md: css`
      max-width: 1500px;
      @media only screen and (${({ theme }) => theme.breakpoints.desktop}) {
        max-width: 1330px;
        padding: 0 27px;
      }
      @media only screen and (${({ theme }) => theme.breakpoints.tabletLandscape}) {
        padding: 0 27px !important;
      }
    `,
    lg: css`
      max-width: 1800px;
      padding: 0 27px !important;
    `,
    fluid: css`
      width: 100%;
      margin: 0;
    `,
  }[size]);

export const Content = styled.div<ContainerProps>`
  ${({ size }) => styledSizes(size)};
  margin: auto;
  padding: 0 !important;
`;
