import styled, { css } from 'styled-components';

interface BoxI {
  display: string;
  alignItems: string;
  justifyContent: string;
  flexDirection: string;
  width: string;
  height: string;
  margin: number[];
  padding: number[];
}

const displayStyles = (display: string) =>
  ({
    start: css`
      display: block;
    `,
    inline: css`
      display: inline;
    `,
    inlineBlock: css`
      display: inline-block;
    `,
    flex: css`
      display: flex;
    `,
    inlineFlex: css`
      display: inline-flex;
    `,
  }[display]);

const alignStyles = (alignItems: string) =>
  ({
    start: css`
      align-items: flex-start;
    `,
    center: css`
      align-items: center;
    `,
    end: css`
      align-items: flex-end;
    `,
  }[alignItems]);

const justifyStyles = (justifyContent: string) =>
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
    between: css`
      justify-content: space-between;
    `,
    evenly: css`
      justify-content: space-evenly;
    `,
    around: css`
      justify-content: space-around;
    `,
  }[justifyContent]);

const directionStyles = (flexDirection: string) =>
  ({
    row: css`
      flex-direction: row;
    `,
    column: css`
      flex-direction: column;
    `,
    rowReverse: css`
      flex-direction: row-reverse;
    `,
    colReverse: css`
      flex-direction: column-reverse;
    `,
  }[flexDirection]);

export const Content = styled.div<BoxI>`
  ${({ display }) => displayStyles(display)};
  ${({ alignItems }) => alignStyles(alignItems)};
  ${({ justifyContent }) => justifyStyles(justifyContent)};
  ${({ flexDirection }) => directionStyles(flexDirection)};
  width: ${({ width }): string => width || 'auto'};
  height: ${({ height }): string => height || 'auto'};
  padding: ${({ padding }): number[] => padding};
  margin: ${({ margin }): number[] => margin};
`;
