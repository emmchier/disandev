import styled, { css } from 'styled-components';

export interface HeadingProps {
  variant?: string;
  weight?: string;
  cap?: string;
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
    semiBold: css`
      font-weight: ${({ theme }) => theme.font.weight.semiBold};
    `,
    bold: css`
      font-weight: ${({ theme }) => theme.font.weight.bold};
    `,
  }[weight]);

const capStyles = (cap: string) =>
  ({
    default: css`
      text-transform: none !important;
    `,
    upper: css`
      text-transform: uppercase !important;
    `,
    lower: css`
      text-transform: lowercase !important;
    `,
    cap: css`
      text-transform: capitalize !important;
    `,
  }[cap]);

export const Content = styled.div<HeadingProps>`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-style: normal;
    padding: 0;
    margin: 0 !important;
    ${({ weight }) => weightStyles(weight as any)};
    ${({ cap }) => capStyles(cap as any)};
  }
  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 !important;
  }
`;

export const Title1 = styled.h1`
  font-size: ${({ theme }) => theme.font.size.largeXXX};
  line-height: ${({ theme }) => theme.font.lineHeight.largeXXX};

  @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.font.size.largeXX};
    line-height: ${({ theme }) => theme.font.lineHeight.largeXX};
  }
`;

export const Title2 = styled.h2`
  font-size: ${({ theme }) => theme.font.size.largeXXX};
  line-height: ${({ theme }) => theme.font.lineHeight.largeXXX};

  @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.font.size.largeXX};
    line-height: ${({ theme }) => theme.font.lineHeight.largeXX};
  }
`;

export const Title3 = styled.h3`
  font-size: ${({ theme }) => theme.font.size.largeXX};
  line-height: ${({ theme }) => theme.font.lineHeight.largeXX};

  @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.font.size.largeX};
    line-height: ${({ theme }) => theme.font.lineHeight.largeX};
  }
`;

export const Title4 = styled.h4`
  font-size: ${({ theme }) => theme.font.size.largeX};
  line-height: ${({ theme }) => theme.font.lineHeight.largeX};

  @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.font.size.large};
    line-height: ${({ theme }) => theme.font.lineHeight.large};
  }
`;

export const Title5 = styled.h5`
  font-size: ${({ theme }) => theme.font.size.large};
  line-height: ${({ theme }) => theme.font.lineHeight.large};

  @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.font.size.medium};
    line-height: ${({ theme }) => theme.font.lineHeight.medium};
  }
`;

export const Title6 = styled.h6`
  font-size: ${({ theme }) => theme.font.size.small};
  line-height: ${({ theme }) => theme.font.lineHeight.small};

  @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.font.size.smallX};
    line-height: ${({ theme }) => theme.font.lineHeight.smallX};
  }
`;
