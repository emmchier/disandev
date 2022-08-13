import React, { FC } from 'react';

import { ContainerList } from './styles';

interface PropTypes {
  children: React.ReactNode;
  orientation?: string;
  alignItems?: string;
  spaceX?: string;
  spaceY?: string;
}

const List: FC<PropTypes> = ({
  children,
  orientation = 'vertical',
  alignItems = 'start',
  spaceX = '20px',
  spaceY = '20px',
}) => (
  <ContainerList orientation={orientation} alignItems={alignItems} spaceX={spaceX} spaceY={spaceY}>
    {children}
  </ContainerList>
);

export default List;
