import React, { FC } from 'react';

import { Spark } from '../../../atoms';

import { Item, List } from './styles';

interface SparkListProps {
  num?: number;
  color?: string;
  display?: string;
}

export const SparkList: FC<SparkListProps> = ({
  num = 1,
  color = 'primary',
  display = 'horizontal',
}) => (
  <List display={display}>
    {[...new Array(num)].map((n, key) => (
      <Item key={key}>
        <Spark color={color} size={1} />
      </Item>
    ))}
  </List>
);
