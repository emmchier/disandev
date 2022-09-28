import React, { FC } from 'react';

import { Content } from './styles';

interface PropTypes {
  children: React.ReactNode;
  display?: string;
  alignItems?: string;
  justifyContent?: string;
  flexDirection?: string;
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
}

const Box: FC<PropTypes> = ({
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

export default Box;
