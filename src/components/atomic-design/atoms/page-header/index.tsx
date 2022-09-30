import React from 'react';
import { FCC } from '../../../../types';

import { SectionHeader } from '../../atoms';
import { Content } from './styles';

interface PageHeaderTypes {
  variant?: string;
}

export const PageHeader: FCC<PageHeaderTypes> = ({ children, variant = 'h2' }) => (
  <Content>
    <SectionHeader variant={variant}>{children}</SectionHeader>
  </Content>
);
