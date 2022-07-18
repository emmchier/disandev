import 'styled-components';
import { theme } from './theme';

export type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    color: {
      primary: {
        light: string;
        dark: string;
      };
      secondary: {
        light: string;
        dark: string;
      };
      tertiary: {
        light: string;
        dark: string;
      };
      greyText: {
        light: string;
        dark: string;
      };
      disabled: string;
      white: string;
      black: string;
      error: string;
    };
    font: {
      family: {
        raleway: string;
        quicksand: string;
        yesteryear: string;
      };
      title: {
        heading1: {
          desk: {
            size: string; // 48px
            lineHeight: string; // 60px
          };
          mob: {
            size: string; // 32px
            lineHeight: string; // 50px
          };
        };
        heading2: {
          desk: {
            size: string; // 32px
            lineHeight: string; // 50px
          };
          mob: {
            size: string; // 24px
            lineHeight: string; // 32px
          };
        };
        heading3: {
          desk: {
            size: string; // 24px
            lineHeight: string; // 40px
          };
          mob: {
            size: string; // 20px
            lineHeight: string; // 32px
          };
        };
      };
      text: {
        body1: {
          desk: {
            size: string; // 18px
            lineHeight: string; // 28px
          };
          mob: {
            size: string; // 16px
            lineHeight: string; // 26px
          };
        };
        body2: {
          desk: {
            size: string; // 16px
            lineHeight: string; // 26px
          };
          mob: {
            size: string; // 16px
            lineHeight: string; // 24px
          };
        };
        body3: {
          desk: {
            size: string; // 14px
            lineHeight: string; // 20px
          };
          mob: {
            size: string; // 14px
            lineHeight: string; // 18px
          };
        };
      };
      weight: {
        light: number;
        regular: number;
        medium: number;
        bold: number;
        black: number;
      };
    };
    spacing: (pixel: number) => string;
    shadow: {
      main: string;
    };
    transition: {
      main: string;
    };
    border: {
      radius: {
        main: string; // 8px
        card: {
          small: string; // 18px
          large: string; // 47px
        };
        full: string;
      };
    };
    breakpoints: {
      smallMobile: string;
      mobile: string;
      tablet: string;
      tabletLandscape: string;
      desktop: string;
    };
  }
}
