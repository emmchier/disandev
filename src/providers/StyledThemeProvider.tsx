import { ThemeProvider as MyStyledThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/globalStyles';
import { theme } from '../styles/theme';
import { FCC } from '../types';

export const StyledThemeProvider: FCC = ({ children }) => (
  <MyStyledThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </MyStyledThemeProvider>
);
