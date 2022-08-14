import React, { FC } from 'react';

import Image from 'next/image';
import { Content } from './styles';

interface Props {
  alt?: string;
  img?: string;
}

const Hero: FC<Props> = ({ img = '', alt = '' }) => (
  <Content>
    <Image alt={alt} src={`https:${img}`} layout="fill" objectFit="cover" />
  </Content>
);

export default Hero;
