import styled, { css } from 'styled-components';

export interface ListProps {
  orientation: string;
  alignItems: string;
  justifyContent: string;
  spaceX: string;
  spaceY: string;
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
  justify-content: ${({ justifyContent }) => justifyContent};
  width: 100%;
  padding: 0;
  margin: 0;
  row-gap: ${({ spaceX }) => spaceX};
  column-gap: ${({ spaceY }) => spaceY};

  li:nth-child(3) {
    svg {
      transform: translateY(2px);
    }
  }
`;
