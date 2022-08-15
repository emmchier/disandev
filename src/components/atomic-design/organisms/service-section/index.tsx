import React, { FC } from 'react';
import { ServiceI } from '../../../../interfaces';
import Heading from '../../atoms/heading';

import SectionHeader from '../../atoms/section-header';
import ServiceList from '../service-list';
import { Content } from './styles';

interface PropTypes {
  list: ServiceI[];
  offsetColumn?: boolean;
}

const ServiceSection: FC<PropTypes> = ({ list, offsetColumn = false }) => (
  <Content>
    <SectionHeader>
      What we do?<b>.</b>
    </SectionHeader>
    <Heading variant="h4" weight="regular">
      We...
    </Heading>
    <ServiceList list={list} offsetColumn={offsetColumn} />
  </Content>
);

export default ServiceSection;
