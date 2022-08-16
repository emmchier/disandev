import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import LoadingPage from '../components/atomic-design/loading-page';
import Layout from '../components/layout';
import GlobalDataProvider from '../providers/GlobalDataProvider';

import { StyledThemeProvider } from '../providers/StyledThemeProvider';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <>
      {!loading ? (
        <>
          <GlobalDataProvider>
            <StyledThemeProvider>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </StyledThemeProvider>
          </GlobalDataProvider>
        </>
      ) : (
        <LoadingPage />
      )}
    </>
  );
};

export default MyApp;
