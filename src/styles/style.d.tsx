import 'styled-components';
import { theme } from './theme';

export type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    color: {
      primary: {
        main: string;
        light: string;
        dark: string;
      };
      secondary: {
        main: string;
        light: string;
        dark: string;
      };
      text: {
        primary: string;
        secondary: string;
        tag: string;
        error: string;
        success: string;
      };
      gradient: {
        primary: string;
      };
      background: {
        primary: string;
        secondary: string;
        tag: string;
        copy: string;
      };
      disabled: string;
      white: string;
      black: string;
      overlay: string;
      hoverButton: string;
    };
    font: {
      family: string;
      size: {
        largeXXX: string;
        largeXX: string;
        largeX: string;
        large: string;
        medium: string;
        small: string;
        smallX: string;
      };
      lineHeight: {
        largeXXX: string;
        largeXX: string;
        largeX: string;
        large: string;
        medium: string;
        small: string;
        smallX: string;
        smallXX: string;
      };
      weight: {
        light: number;
        regular: number;
        medium: number;
        semiBold: number;
        bold: number;
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
        small: string;
        main: string;
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
