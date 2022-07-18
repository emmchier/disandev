import styled, { css, DefaultTheme } from 'styled-components';

type ParagraphI = {
  variant: string;
  color: string;
  weight: string;
  cap: string;
};

const variantStyles = (theme: DefaultTheme, variant: string) =>
  ({
    body1: css`
      font-size: ${theme.font.text.body1.desk.size};
      line-height: ${theme.font.text.body1.desk.lineHeight};
      @media only screen and (${theme.breakpoints.tablet}) {
        font-size: ${theme.font.text.body2.desk.size};
        line-height: ${theme.font.text.body2.desk.lineHeight};
      }
    `,
    body2: css`
      font-size: ${theme.font.text.body2.desk.size};
      line-height: ${theme.font.text.body2.desk.lineHeight};
      @media only screen and (${theme.breakpoints.tablet}) {
        font-size: ${theme.font.text.body3.mob.size};
        line-height: ${theme.font.text.body3.mob.lineHeight};
      }
    `,
    body3: css`
      font-size: ${theme.font.text.body3.desk.size};
      line-height: ${theme.font.text.body3.desk.lineHeight};
    `,
  }[variant]);

const colorStyles = (theme: DefaultTheme, color: string) =>
  ({
    light: css`
      color: ${theme.color.white};
    `,
    dark: css`
      color: ${theme.color.greyText.dark};
    `,
    primary: css`
      color: ${theme.color.primary.dark};
    `,
    secondary: css`
      color: ${theme.color.secondary.dark};
    `,
  }[color]);

const weightStyles = (theme: DefaultTheme, weight: string) =>
  ({
    regular: css`
      font-weight: ${theme.font.weight.regular};
    `,
    bold: css`
      font-weight: ${theme.font.weight.bold};
    `,
  }[weight]);

const capStyles = (cap: string) =>
  ({
    default: css`
      text-transform: none;
    `,
    allCaps: css`
      text-transform: uppercase;
    `,
    light: css`
      text-transform: lowercase;
    `,
    cap: css`
      text-transform: capitalize;
    `,
  }[cap]);

export const Paragraph = styled.p<ParagraphI>`
  ${({ theme, variant }) => variantStyles(theme, variant)};
  ${({ theme, weight }) => weightStyles(theme, weight)};
  ${({ theme, color }) => colorStyles(theme, color)};
  ${({ cap }) => capStyles(cap)};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  padding: 0;
  margin: 0;
  b {
    color: ${({ theme }) => theme.color.black};
    font-weight: ${({ theme }) => theme.font.weight.bold};
  }
`;
