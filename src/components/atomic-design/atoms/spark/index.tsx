import React, { FC } from 'react';

import { Content } from './styles';

interface PropTypes {
  color?: string;
  size?: number;
}

const Spark: FC<PropTypes> = ({ color = 'primary', size = 1 }) => (
  <Content color={color} size={size} />
);

export default Spark;
