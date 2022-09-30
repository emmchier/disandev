import React from 'react';
import { FCC } from '../../../../../types';

import { Item } from './styles';

interface ListItemTypes {
  onClick?: () => void;
}

export const ListItem: FCC<ListItemTypes> = ({ children, onClick }) => (
  <Item onClick={onClick}>{children}</Item>
);
