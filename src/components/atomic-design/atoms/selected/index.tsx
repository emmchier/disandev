import React, { FC } from 'react';

import { Dot, Text, Content, TextNotSelected } from './styles';

type Props = {
  children: React.ReactNode;
  noSelected?: boolean;
};

const Selected: FC<Props> = ({ children, noSelected = false }) => (
  <Content>
    {!noSelected ? <Text>{children}</Text> : <TextNotSelected>{children}</TextNotSelected>}
    <Dot>.</Dot>
  </Content>
);

export default Selected;
