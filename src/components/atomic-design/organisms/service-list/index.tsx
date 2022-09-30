import React, { FC } from 'react';

import { ServiceI } from '../../../../interfaces';

import { Card, Row, Col } from '../../molecules';

import { theme } from '../../../../styles/theme';
import { Content } from './styles';

interface Props {
  list: ServiceI[];
  offsetColumn?: boolean;
}

export const ServiceList: FC<Props> = ({ list, offsetColumn = false }) => (
  <Content offsetColumn={offsetColumn}>
    <Row gap={8}>
      {list?.map((item: ServiceI) => (
        <Col xs={12} sm={6} md={4} lg={4} xlg={4} key={item?.fields?.name}>
          <Card
            img={
              item?.fields?.cover?.fields?.file?.url
                ? `https:${item?.fields?.cover?.fields?.file?.url}`
                : '/images/default-img.svg'
            }
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
