import styled, { css } from 'styled-components';

interface SparkListProps {
  display: string;
}

const styledDisplay = (display: string) =>
  ({
    vertical: css`
      display: inherit;

      li {
        margin-bottom: ${({ theme }) => theme.spacing(2)};
      }
    `,
    horizontal: css`
      display: flex;

      li {
        margin-right: ${({ theme }) => theme.spacing(2)};
      }
    `,
  }[display]);

export const List = styled.ul<SparkListProps>`
  margin: 0;
  padding: 0;
  ${({ display }) => styledDisplay(display)};

  li:nth-last-child() {
    margin: 0;
  }
`;

export const Item = styled.li`
  justify-content: space-space-evenly;
`;
