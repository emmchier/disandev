import type { AppProps } from 'next/app';
import Layout from '../components/layout';
import { StyledThemeProvider } from '../providers/StyledThemeProvider';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <StyledThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StyledThemeProvider>
  );
};

export default MyApp;
