import React from 'react';

import Link from 'next/link';

import { FCC } from '../../../../types';

interface CustomLinkTypes {
  to: string;
  target?: string;
}

export const CustomLink: FCC<CustomLinkTypes> = ({ children, to = '', target = '' }) => (
  <Link href={to} passHref>
    <a target={target}>{children}</a>
  </Link>
);
