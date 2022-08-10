import React, { FC } from 'react';

import SectionHeader from '../section-header';
import { Content } from './styles';

type Props = {
  children: React.ReactNode;
  variant?: string;
};

const PageHeader: FC<Props> = ({ children, variant = 'h2' }) => (
  <Content>
    <SectionHeader variant={variant}>{children}</SectionHeader>
  </Content>
);

export default PageHeader;
