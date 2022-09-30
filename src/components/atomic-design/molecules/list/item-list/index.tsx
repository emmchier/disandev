import React from 'react';
import { FCC } from '../../../../../types';

import { Item } from './styles';

interface ListItemTypes {
  onClick?: () => void;
}

const ListItem: FCC<ListItemTypes> = ({ children, onClick }) => (
  <Item onClick={onClick}>{children}</Item>
);

export default ListItem;
