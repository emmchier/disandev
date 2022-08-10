import Image from 'next/image';
import React, { FC } from 'react';
import { TechI } from '../../../../interfaces';

import Box from '../../atoms/box';
import Text from '../../atoms/text';
import Col from '../../molecules/grid/col';
import Row from '../../molecules/grid/row';
import { Content } from './styles';

interface Props {
  list: TechI[];
}

const TechList: FC<Props> = ({ list }) => (
  <Row gap={10}>
    {list.map((item) => (
      <Col key={item?.fields?.technologyName} xs={6} sm={3} md={2} lg={2} xlg={2}>
        <Content>
          <Box display="flex" alignItems="center" flexDirection="column">
            <img
              src={`https:${item?.fields?.image?.fields?.file?.url}`}
              alt={item?.fields?.technologyName}
              width="100%"
              height="100%"
            />
            <Text>{item?.fields?.technologyName}</Text>
          </Box>
        </Content>
      </Col>
    ))}
  </Row>
);

export default TechList;
