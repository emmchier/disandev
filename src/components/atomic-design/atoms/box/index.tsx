import React from 'react';
import { FCC } from '../../../../types';

import { Content } from './styles';

interface BoxTypes {
  display?: string;
  alignItems?: string;
  justifyContent?: string;
  flexDirection?: string;
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
}

export const Box: FCC<BoxTypes> = ({
  children,
  display = 'block',
  alignItems = 'start',
  justifyContent = 'start',
  flexDirection = 'row',
  width = 'auto',
  height = 'auto',
  margin = '',
  padding = '',
}) => (
  <Content
    display={display}
    alignItems={alignItems}
    justifyContent={justifyContent}
    flexDirection={flexDirection}
    width={width}
    height={height}
    margin={margin}
    padding={padding}
  >
    {children}
  </Content>
);
