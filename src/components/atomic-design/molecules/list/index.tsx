import React, { FC } from 'react';

import { ContainerList } from './styles';

interface PropTypes {
  children: React.ReactNode;
  orientation?: string;
  alignItems?: string;
  justifyContent?: string;
  spaceX?: string;
  spaceY?: string;
}

const List: FC<PropTypes> = ({
  children,
  orientation = 'vertical',
  alignItems = 'start',
  justifyContent = 'space-between',
  spaceX = '20px',
  spaceY = '20px',
}) => (
  <ContainerList
    orientation={orientation}
    alignItems={alignItems}
    justifyContent={justifyContent}
    spaceX={spaceX}
    spaceY={spaceY}
  >
    {children}
  </ContainerList>
);

export default List;
