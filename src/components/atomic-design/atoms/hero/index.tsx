import React, { FC } from 'react';

import Image from 'next/image';

interface Props {
  alt?: string;
  img?: string;
  size?: string;
  width?: string;
  height?: string;
}

const Hero: FC<Props> = ({ img = '', alt = '', width = '100%', height = '100vh' }) => (
  <Image src={`https:${img}`} alt={alt} width={width} height={height} priority />
);

export default Hero;
