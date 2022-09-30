import React from 'react';
import { FCC } from '../../../../types';

import Heading from '../heading';
import { Content } from './styles';

interface SectionHeaderTypes {
  variant?: string;
  cap?: string;
}

const SectionHeader: FCC<SectionHeaderTypes> = ({ children, variant = 'h3', cap = 'default' }) => (
  <Content>
    <Heading variant={variant} cap={cap}>
      {children}
    </Heading>
  </Content>
);

export default SectionHeader;
