import React from 'react';
import { FCC } from '../../../../types';

import { ContainerList } from './styles';

interface ListTypes {
  orientation?: string;
  alignItems?: string;
  justifyContent?: string;
  spaceX?: string;
  spaceY?: string;
}

const List: FCC<ListTypes> = ({
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
