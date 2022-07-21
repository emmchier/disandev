import React, { FC } from 'react';

import { GridList } from './styles';

type Spacing = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

interface PropTypes {
  children: React.ReactNode;
  gap?: Spacing;
}

const Row: FC<PropTypes> = ({ children, gap = 0 }) => <GridList gap={gap}>{children}</GridList>;

export default Row;
