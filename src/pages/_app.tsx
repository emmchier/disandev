import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import LoadingPage from '../components/atomic-design/loading-page';
import Layout from '../components/layout';
import GlobalDataProvider from '../providers/GlobalDataProvider';

import { StyledThemeProvider } from '../providers/StyledThemeProvider';
import MainProvider from '../providers/MainContextProvider';
import Script from 'next/script';
import TagManager, { TagManagerArgs } from 'react-gtm-module';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [loading, setLoading] = useState(true);

  const gtmId = process.env.REACT_APP_GOOGLE_TAG_MANAGER || '';
  const tagManagerArgs: TagManagerArgs = { gtmId };

  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <>
      {!loading ? (
        <>
          <Script strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TWKQ6DQ');`}
          </Script>
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
