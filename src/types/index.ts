import { FC, PropsWithChildren } from 'react';

export {};

declare global {
  interface Window {
    dataLayer: string;
  }
}

export type FCC<P = {}> = FC<PropsWithChildren<P>>;
