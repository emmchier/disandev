import React, { FC } from 'react';

import { StepI } from '../../../../../interfaces';

import { Heading, Spark, Text } from '../../../atoms';
import { Row, Col } from '../../../molecules';

import { Content, TitleContainer } from './styles';

interface PropTypes {
  item: StepI;
  isBorder?: boolean;
}

export const StepItem: FC<PropTypes> = ({ item, isBorder }) => (
  <Content isBorder={isBorder}>
    <Row>
      <Col xs={12} sm={5} md={5} lg={5} xlg={5}>
        <TitleContainer>
          <span>
            <Spark size={3} />
          </span>
          <Heading variant="h4" weight="bold">
            {item?.fields?.stepTitle}
          </Heading>
        </TitleContainer>
      </Col>
      <Col xs={12} sm={7} md={7} lg={7} xlg={7}>
        <Text>{item?.fields?.stepDesc}</Text>
      </Col>
    </Row>
  </Content>
);
