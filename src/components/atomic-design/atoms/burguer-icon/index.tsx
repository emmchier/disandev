import React, { FC } from 'react';

import SparkList from '../spark/spark-list';

import { Content, Span } from './styles';

const BurguerIcon: FC = () => (
  <Content>
    <Span>
      <SparkList num={3} color="primary" />
    </Span>
    <Span>
      <SparkList num={3} color="primary" />
    </Span>
    <Span>
      <SparkList num={3} color="primary" />
    </Span>
  </Content>
);

export default BurguerIcon;
