import type { AppProps } from 'next/app';
import Layout from '../components/layout';
import GlobalDataProvider from '../providers/GlobalDataProvider';
import { StyledThemeProvider } from '../providers/StyledThemeProvider';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <GlobalDataProvider>
      <StyledThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StyledThemeProvider>
    </GlobalDataProvider>
  );
};

export default MyApp;
