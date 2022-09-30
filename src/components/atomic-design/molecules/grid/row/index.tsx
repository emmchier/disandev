import React from 'react';
import { FCC } from '../../../../../types';

import { GridList } from './styles';

type Spacing = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

interface RowTypes {
  gap?: Spacing;
}

export const Row: FCC<RowTypes> = ({ children, gap = 0 }) => (
  <GridList gap={gap}>{children}</GridList>
);
