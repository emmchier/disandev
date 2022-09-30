import React, { FC } from 'react';

import { ServiceI } from '../../../../interfaces';

import { SectionHeader } from '../../atoms';
import { ServiceList } from '../../organisms';

import { Content } from './styles';

interface PropTypes {
  list: ServiceI[];
  offsetColumn?: boolean;
}

export const ServiceSection: FC<PropTypes> = ({ list, offsetColumn = false }) => (
  <Content>
    <SectionHeader>
      What we do?<b>.</b>
    </SectionHeader>
    <ServiceList list={list} offsetColumn={offsetColumn} />
  </Content>
);
