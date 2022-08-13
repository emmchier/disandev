import React, { FC } from 'react';

import Container from '../container';
import Content from './styles';

interface SectionI {
  children: React.ReactNode;
  auto?: boolean;
  container?: string;
  padding?: string;
}

const Section: FC<SectionI> = ({ auto = true, container = 'md', children, padding = '0' }) => {
  return (
    <Content auto={auto} padding={padding}>
      <Container size={container}>{children}</Container>
    </Content>
  );
};

export default Section;
