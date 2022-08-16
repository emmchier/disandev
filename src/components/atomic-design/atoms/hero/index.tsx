import React, { FC } from 'react';

import Image from 'next/image';
import { Content } from './styles';

interface Props {
  alt?: string;
  img?: string;
}

const Hero: FC<Props> = ({ img = '', alt = '' }) => (
  <Content>
    <Image
      alt={alt}
      src={img ? `https:${img}` : '/images/default-bg.svg'}
      layout="fill"
      objectFit="cover"
      priority
    />
  </Content>
);

export default Hero;
