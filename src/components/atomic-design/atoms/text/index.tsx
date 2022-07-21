import React from 'react';

import { Paragraph } from './styles';

type TextI = {
  children: React.ReactNode;
  weight?: string;
  color?: string;
  cap?: string;
};

const Text = ({ children, weight = 'regular', color = 'dark', cap = 'default' }: TextI) => (
  <Paragraph weight={weight} color={color} cap={cap}>
    {children}
  </Paragraph>
);

export default Text;
