import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { FCC } from '../../../../types';

import { Content } from './styles';

interface PageTypes {
  title: string;
  description: string;
  keywords: string;
}

const origin = typeof window === 'undefined' ? '' : window.location.origin;

export const Page: FCC<PageTypes> = ({ children, title, description, keywords }) => {
  const { asPath } = useRouter();

  return (
    <Content>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title && title}</title>
        {description && <meta name="description" content={description} />}
        {keywords && <meta name="keywords" content={keywords} />}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://disandev.com/" />
        <meta name="author" content="https://disandev.com/" />
        <meta name="owner" content="Disandev" />
        <meta httpEquiv="content-lenguage" content="es-ES" />
        <meta name="distribution" content="global" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content={`${origin}/images${asPath === '/' ? '/home' : asPath}-tag.png`}
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
          as="style"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
          as="style"
        />
      </Head>
      {children}
    </Content>
  );
};
