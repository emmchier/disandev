import styled, { css } from 'styled-components';

interface SparkProps {
  color: string;
  size: number;
}

const styledColor = (color: string) =>
  ({
    primary: css`
      background-color: ${({ theme }) => theme.color.primary.main};
    `,
    secondary: css`
      background-color: ${({ theme }) => theme.color.secondary.main};
    `,
    dark: css`
      background-color: ${({ theme }) => theme.color.text.primary};
    `,
    gradient: css`
      background: ${({ theme }) => theme.color.gradient.primary};
    `,
  }[color]);

export const Content = styled.div<SparkProps>`
  width: ${({ size }) => `${(size = size * 5)}px`};
  height: ${({ size }) => `${(size = size * 5)}px`};
  ${({ color }) => styledColor(color)};
  border-radius: ${({ theme }) => theme.border.radius.full};
  margin: 0;
`;
