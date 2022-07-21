import React, { FC } from 'react';

import { ContainerList } from './styles';

interface PropTypes {
  children: React.ReactNode;
  orientation?: string;
  alignItems?: string;
  gap?: number;
}

const List: FC<PropTypes> = ({
  children,
  orientation = 'vertical',
  alignItems = 'start',
  gap = 3,
}) => (
  <ContainerList orientation={orientation} alignItems={alignItems} gap={gap}>
    {children}
  </ContainerList>
);

export default List;
