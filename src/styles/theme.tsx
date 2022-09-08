export const theme = {
  color: {
    primary: {
      main: '#6957F0',
      light: '#a185ff',
      dark: '#272cbc',
    },
    secondary: {
      main: '#7D31AE',
      light: '#F2F0FE',
      dark: '#3F349D',
    },
    text: {
      primary: '#626161',
      secondary: '#808080',
      tag: '#6957F0',
      error: '#EF4E1B',
      success: '#00A4A1',
    },
    gradient: {
      primary:
        'linear-gradient(68.08deg, rgba(178, 199, 244, 0.3) 30%, rgba(178, 199, 244, 0.3) 30%, rgba(233, 255, 255, 0.8) 80%);',
    },
    background: {
      primary: '#EDFFFF',
      secondary: '#F2F0FE',
      tag: '#E3EDFB',
      copy: '#F3F1FF',
    },
    disabled: '#DFDFDF',
    white: '#FFFFFF',
    black: '#2E2E2E',
    overlay: '#00000069',
    hoverButton: '#ddfdfd',
  },
  font: {
    family: "'Montserrat', sans-serif",
    size: {
      largeXXX: '3rem', // 48px
      largeXX: '2.5rem', // 40px
      largeX: '2rem', // 32px
      large: '1.5rem', // 24px
      medium: '1.25rem', // 20px
      small: '1rem', // 16px
      smallX: '0.875rem', // 14px
    },
    lineHeight: {
      largeXXX: '3.688rem', // 59px
      largeXX: '3.125rem', // 50px
      largeX: '2.813rem', // 45px
      large: '2.625rem', // 42px
      medium: '2.125rem', // 34px
      small: '1.875rem', // 30px
      smallX: '1.625rem', // 26px
      smallXX: '1.5rem', // 24px
    },
    weight: {
      light: 300,
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
    },
  },
  spacing: (pixel: number) => `${0.25 * pixel}rem`,
  shadow: {
    main: `
            0px 0px 1px rgba(0, 0, 0, 0.04),
            0px 2px 6px rgba(76, 81, 191, 0.12),
            0px 10px 20px rgba(76, 81, 191, 0.18)`,
    navbar: `box-shadow: 3px 7px 18px 0px rgba(76,81,191,0.15);
    -webkit-box-shadow: 3px 7px 18px 0px rgba(76,81,191,0.15);
    -moz-box-shadow: 3px 7px 18px 0px rgba(76,81,191,0.15);`,
  },
  transition: {
    main: '0.1s ease-in-out',
  },
  border: {
    radius: {
      small: '5px',
      main: '8px',
      full: '50px',
    },
  },
  breakpoints: {
    smallMobile: 'max-width: 479px', // small smarth phone
    mobile: 'max-width: 767px', // smath phone
    tablet: 'max-width: 1200px', // iphone, tablet
    tabletLandscape: 'max-width: 1500px', // macbook pro
    desktop: 'max-width: 2500px', // largest screen monitors
  },
};
