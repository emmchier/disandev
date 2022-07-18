import styled, { css, DefaultTheme } from 'styled-components';

type HeadingI = {
  variant: string;
  weight: string;
  color: string;
  cap: string;
};

const variantStyles = (theme: DefaultTheme, variant: string) =>
  ({
    h1: css`
      font-size: ${theme.font.title.heading1.desk.size};
      line-height: ${theme.font.title.heading1.desk.lineHeight};
      font-weight: ${theme.font.weight.regular};
      @media only screen and (${theme.breakpoints.tablet}) {
        font-size: ${theme.font.title.heading1.mob.size};
        line-height: ${theme.font.title.heading1.mob.lineHeight};
      }
    `,
    h2: css`
      font-size: ${theme.font.title.heading2.desk.size};
      line-height: ${theme.font.title.heading2.desk.lineHeight};
      @media only screen and (${theme.breakpoints.tablet}) {
        font-size: ${theme.font.title.heading2.mob.size};
        line-height: ${theme.font.title.heading2.mob.lineHeight};
      }
    `,
    h3: css`
      font-size: ${theme.font.title.heading3.desk.size};
      line-height: ${theme.font.title.heading3.desk.lineHeight};
      @media only screen and (${theme.breakpoints.tablet}) {
        font-size: ${theme.font.title.heading3.mob.size};
        line-height: ${theme.font.title.heading3.mob.lineHeight};
      }
    `,
    h4: css`
      font-size: ${theme.font.text.body1.desk.size};
      line-height: ${theme.font.text.body1.desk.lineHeight};
      @media only screen and (${theme.breakpoints.tablet}) {
        font-size: ${theme.font.text.body1.mob.size};
        line-height: ${theme.font.text.body1.mob.lineHeight};
      }
    `,
    h5: css`
      font-size: ${theme.font.text.body2.desk.size};
      line-height: ${theme.font.text.body2.desk.lineHeight};
      @media only screen and (${theme.breakpoints.tablet}) {
        font-size: ${theme.font.text.body2.mob.size};
        line-height: ${theme.font.text.body2.mob.lineHeight};
      }
    `,
    h6: css`
      font-size: ${theme.font.text.body3.desk.size};
      line-height: ${theme.font.text.body3.desk.lineHeight};
      @media only screen and (${theme.breakpoints.tablet}) {
        font-size: ${theme.font.text.body3.mob.size};
        line-height: ${theme.font.text.body3.mob.lineHeight};
      }
    `,
  }[variant]);

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

const colorStyles = (theme: DefaultTheme, color: string) =>
  ({
    default: css`
      color: ${theme.color.greyText.dark};
    `,
    primary: css`
      color: ${theme.color.primary.light};
    `,
    secondary: css`
      color: ${theme.color.secondary.dark};
    `,
  }[color]);

export const Content = styled.div<HeadingI>`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-style: normal;
    color: ${({ theme }) => theme.color.greyText.dark};
    text-transform: uppercase;
    padding: 0;
    margin: 0;
    ${({ theme, variant }) => variantStyles(theme, variant)};
    ${({ theme, weight }) => weightStyles(theme, weight)};
    ${({ theme, color }) => colorStyles(theme, color)};
    ${({ cap }) => capStyles(cap)};
  }
  b {
    color: ${({ theme }) => theme.color.black};
    font-weight: ${({ theme }) => theme.font.weight.bold};
  }
`;

export const Title1 = styled.h1``;

export const Title2 = styled.h2``;

export const Title3 = styled.h3``;

export const Title4 = styled.h4``;

export const Title5 = styled.h5``;

export const Title6 = styled.h6``;
