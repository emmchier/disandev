import React, { FC } from 'react';
import Image from 'next/image';

import { TechI } from '../../../../interfaces';

import { Box, Text } from '../../atoms';
import { Row, Col } from '../../molecules';

import { Content } from './styles';

interface Props {
  list: TechI[];
}

export const TechList: FC<Props> = ({ list }) => (
  <Row gap={10}>
    {list.map((item) => (
      <Col key={item?.fields?.technologyName} xs={6} sm={3} md={2} lg={2} xlg={2}>
        <Content>
          <Box display="flex" alignItems="center" flexDirection="column">
            <Image
              src={
                item?.fields?.image?.fields?.file?.url
                  ? `https:${item?.fields?.image?.fields?.file?.url}`
                  : '/images/default-img.svg'
              }
              alt={item?.fields?.technologyName}
              width={80}
              height={80}
              priority
            />
            <Text>{item?.fields?.technologyName}</Text>
          </Box>
        </Content>
      </Col>
    ))}
  </Row>
);
