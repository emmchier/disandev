import styled, { css } from 'styled-components';

interface ContainerI {
  alignItems: string;
}

const alignStyles = (alignItems: string) =>
  ({
    start: css`
      justify-content: flex-start;
    `,
    center: css`
      justify-content: center;
    `,
    end: css`
      justify-content: flex-end;
    `,
  }[alignItems]);

export const Container = styled.div<ContainerI>`
  width: 100%;
  display: flex;
  align-items: center;
  ${({ alignItems }) => alignStyles(alignItems)};

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    justify-content: flex-start !important;
  }
`;

export const Content = styled.div``;
