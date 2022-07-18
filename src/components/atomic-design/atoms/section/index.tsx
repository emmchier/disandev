import React, { FC } from 'react';

import Container from '../container';
import Content from './styles';

interface SectionI {
  children: React.ReactNode;
  auto?: boolean;
  container?: string;
}

const Section: FC<SectionI> = ({ auto = false, container = 'fluid', children }) => {
  return (
    <Content auto={auto}>
      <Container size={container}>{children}</Container>
    </Content>
  );
};

export default Section;
