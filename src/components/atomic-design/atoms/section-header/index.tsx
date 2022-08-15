import React, { FC } from 'react';

import Heading from '../heading';
import { Content } from './styles';

type SectionHeaderProps = {
  children: React.ReactNode;
  variant?: string;
  cap?: string;
};

const SectionHeader: FC<SectionHeaderProps> = ({ children, variant = 'h3', cap = 'default' }) => (
  <Content>
    <Heading variant={variant} cap={cap}>
      {children}
    </Heading>
  </Content>
);

export default SectionHeader;
