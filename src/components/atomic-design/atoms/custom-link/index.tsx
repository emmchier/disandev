import Link from 'next/link';
import React, { FC } from 'react';

interface PropTypes {
  children: React.ReactNode;
  to: string;
  target?: string;
}

const CustomLink: FC<PropTypes> = ({ children, to = '', target = '' }) => (
  <Link href={to} target={target} passHref>
    <a>{children}</a>
  </Link>
);

export default CustomLink;
