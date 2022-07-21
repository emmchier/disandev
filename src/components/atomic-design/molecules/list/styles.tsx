import styled, { css } from 'styled-components';

export interface ListProps {
  orientation: string;
  alignItems: string;
  gap: number;
}

const orientationStyles = (orientation: string) =>
  ({
    horizontal: css`
      display: flex;
      flex-direction: row;

      li:nth-child(1) {
        margin-left: 0;
      }
    `,
    vertical: css`
      display: inherit;
      flex-direction: column;

      li {
        margin-left: 0 !important;
        margin-right: 0 !important;
      }

      li:nth-child(1) {
        margin-top: 0;
      }
    `,
  }[orientation]);

const alignItemsStyles = (alignItems: string) =>
  ({
    start: css`
      justify-content: flex-start;
      align-items: flex-start;
    `,
    center: css`
      justify-content: center;
      align-items: center;
    `,
    end: css`
      justify-content: flex-end;
      align-items: flex-end;
    `,
  }[alignItems]);

export const ContainerList = styled.ul<ListProps>`
  ${({ orientation }) => orientationStyles(orientation)};
  ${({ alignItems }) => alignItemsStyles(alignItems)};
  display: flex;
  width: 100%;
  padding: 0;
  margin: 0;

  li {
    margin: ${({ gap }) => `${0.25 * gap}rem`};
  }
`;
