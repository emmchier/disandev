import React from 'react';
import { FCC } from '../../../../types';

import SectionHeader from '../section-header';
import { Content } from './styles';

interface PageHeaderTypes {
  variant?: string;
}

const PageHeader: FCC<PageHeaderTypes> = ({ children, variant = 'h2' }) => (
  <Content>
    <SectionHeader variant={variant}>{children}</SectionHeader>
  </Content>
);

export default PageHeader;
