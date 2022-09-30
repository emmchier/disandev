import React, { FC } from 'react';

import { SparkList } from '../../atoms';

import { Content, Span } from './styles';

export const BurguerIcon: FC = () => (
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
