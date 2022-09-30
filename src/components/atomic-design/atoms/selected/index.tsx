import React from 'react';
import { FCC } from '../../../../types';

import { Dot, Text, Content, TextNotSelected } from './styles';

interface SelectedTypes {
  noSelected?: boolean;
}

export const Selected: FCC<SelectedTypes> = ({ children, noSelected = false }) => (
  <Content>
    {!noSelected ? <Text>{children}</Text> : <TextNotSelected>{children}</TextNotSelected>}
    <Dot>.</Dot>
  </Content>
);
