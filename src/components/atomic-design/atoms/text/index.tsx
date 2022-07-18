import React from 'react';

import { Paragraph } from './styles';

type TextI = {
  children: React.ReactNode;
  variant?: string;
  weight?: string;
  color?: string;
  cap?: string;
};

const Text = ({
  children,
  variant = 'body1',
  weight = 'regular',
  color = 'dark',
  cap = 'default',
}: TextI) => (
  <Paragraph variant={variant} weight={weight} color={color} cap={cap}>
    {children}
  </Paragraph>
);

export default Text;
