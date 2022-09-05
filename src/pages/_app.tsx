import type { AppProps } from 'next/app';
import { Router, useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import LoadingPage from '../components/atomic-design/loading-page';
import Layout from '../components/layout';
import GlobalDataProvider from '../providers/GlobalDataProvider';

import { StyledThemeProvider } from '../providers/StyledThemeProvider';
import { gtmVirtualPageView } from '../utils';
import { MainContext } from '../context/index';
import MainProvider from '../providers/MainContextProvider';

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
              <MainProvider>
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              </MainProvider>
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
