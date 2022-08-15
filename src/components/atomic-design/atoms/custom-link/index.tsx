import React, { FC } from 'react';
import Link from 'next/link';

interface PropTypes {
  children: React.ReactNode;
  to: string;
  target?: string;
}

const CustomLink: FC<PropTypes> = ({ children, to = '', target = '' }) => (
  <Link href={to} passHref>
    <a target={target}>{children}</a>
  </Link>
);

export default CustomLink;
