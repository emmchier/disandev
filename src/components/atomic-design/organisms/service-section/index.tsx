import React, { FC } from 'react';
import { ServiceI } from '../../../../interfaces';

import SectionHeader from '../../atoms/section-header';
import ServiceList from '../service-list';
import { Content } from './styles';

interface PropTypes {
  list: ServiceI[];
  offsetColumn?: boolean;
}

const ServiceSection: FC<PropTypes> = ({ list, offsetColumn = false }) => (
  <Content>
    <SectionHeader>What we do?</SectionHeader>
    <ServiceList list={list} offsetColumn={offsetColumn} />
  </Content>
);

export default ServiceSection;
