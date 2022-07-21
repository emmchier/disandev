import React, { FC } from 'react';

import { Container, Content } from './styles';

interface DinamicContentPropTypes {
  children: React.ReactNode;
  alignItems?: string;
}

const DinamicContent: FC<DinamicContentPropTypes> = ({ children, alignItems = 'flex-start' }) => (
  <Container alignItems={alignItems}>
    <Content>{children}</Content>
  </Container>
);

export default DinamicContent;
