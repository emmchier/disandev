import React, { FC } from 'react';

import { theme } from '../../../../styles/theme';
import Card from '../../molecules/card';
import { ServiceI } from '../../../../interfaces';
import { Content } from './styles';
import Row from '../../molecules/grid/row';
import Col from '../../molecules/grid/col';

interface Props {
  list: ServiceI[];
  offsetColumn?: boolean;
}

const ServiceList: FC<Props> = ({ list, offsetColumn = false }) => (
  <Content offsetColumn={offsetColumn}>
    <Row gap={10}>
      {list?.map((item: ServiceI) => (
        <Col xs={12} sm={6} md={4} lg={4} xlg={4}>
          <Card
            img={item?.fields?.cover?.fields?.file?.url}
            title={item?.fields?.name}
            description={item?.fields?.description}
            alt={item?.fields?.name}
            sparks={false}
            cap="cap"
            padding={theme.spacing(9)}
          />
        </Col>
      ))}
    </Row>
  </Content>
);

export default ServiceList;
