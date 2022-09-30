import React from 'react';

import { FCC } from '../../../../types';

import { Container, Content } from './styles';

interface DinamicContentTypes {
  alignItems?: string;
}

const DinamicContent: FCC<DinamicContentTypes> = ({ children, alignItems = 'flex-start' }) => (
  <Container alignItems={alignItems}>
    <Content>{children}</Content>
  </Container>
);

export default DinamicContent;
