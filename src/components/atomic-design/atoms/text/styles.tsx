import styled, { css } from 'styled-components';

interface TextProps {
  weight: string;
  cap: string;
  color: string;
}

const weightStyles = (weight: string) =>
  ({
    light: css`
      font-weight: ${({ theme }) => theme.font.weight.light};
    `,
    regular: css`
      font-weight: ${({ theme }) => theme.font.weight.regular};
    `,
    medium: css`
      font-weight: ${({ theme }) => theme.font.weight.medium};
    `,
    bold: css`
      font-weight: ${({ theme }) => theme.font.weight.bold};
    `,
  }[weight]);

const capStyles = (cap: string) =>
  ({
    default: css`
      text-transform: none;
    `,
    upper: css`
      text-transform: uppercase;
    `,
    lower: css`
      text-transform: lowercase;
    `,
    cap: css`
      text-transform: capitalize;
    `,
  }[cap]);

const colorStyles = (color: string) =>
  ({
    primary: css`
      color: ${({ theme }) => theme.color.text.primary};
    `,
    secondary: css`
      color: ${({ theme }) => theme.color.text.secondary};
    `,
    success: css`
      color: ${({ theme }) => theme.color.text.success};
    `,
    error: css`
      color: ${({ theme }) => theme.color.text.error};
    `,
  }[color]);

export const Paragraph = styled.p<TextProps>`
  font-size: ${({ theme }) => theme.font.size.medium};
  line-height: ${({ theme }) => theme.font.lineHeight.small};
  ${({ weight }) => weightStyles(weight)};
  ${({ cap }) => capStyles(cap)};
  ${({ color }) => colorStyles(color)};
  font-style: normal;
  padding: 0;
  margin: 0;

  @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.font.size.small};
  }
`;
