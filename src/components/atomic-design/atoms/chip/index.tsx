import React, { FC } from 'react';

import { Content } from './styles';

interface ChipTypes {
  children: React.ReactNode;
}

const Chip: FC<ChipTypes> = ({ children }) => <Content>#{children}</Content>;

export default Chip;
