import React from 'react';
import { FCC } from '../../../../types';

import { Container } from '../../atoms';

import Content from './styles';

interface SectionTypes {
  auto?: boolean;
  container?: 'sm' | 'md' | 'lg' | 'none';
  padding?: string;
}

export const Section: FCC<SectionTypes> = ({
  auto = true,
  container = 'md',
  children,
  padding = '0',
}) => {
  return (
    <Content auto={auto} padding={padding}>
      <Container size={container}>{children}</Container>
    </Content>
  );
};
