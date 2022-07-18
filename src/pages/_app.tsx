import type { AppProps } from 'next/app';
import { StyledThemeProvider } from '../providers/StyledThemeProvider';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <StyledThemeProvider>
      <Component {...pageProps} />
    </StyledThemeProvider>
  );
};

export default MyApp;
