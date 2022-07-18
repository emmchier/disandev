import React, { FC } from 'react';
import { Content } from './styles';

interface PropTypes {
  children: React.ReactNode;
  size?: string;
}

const Container: FC<PropTypes> = ({ children, size = 'md' }) => (
  <Content size={size}>{children}</Content>
);

export default Container;
