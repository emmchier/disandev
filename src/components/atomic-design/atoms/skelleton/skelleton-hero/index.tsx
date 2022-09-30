import React from 'react';

import { Icon } from '../../../atoms';

import { Content } from './styles';

export const SkelletonHero = () => {
  return (
    <Content>
      <Icon icon="hero" ariaLabel="Skelleton hero pulse animation" />
    </Content>
  );
};
