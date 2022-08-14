import React, { FC } from 'react';

import { Item } from './styles';

interface PropTypes {
  children: React.ReactNode;
  onClick?: () => void;
}

const ListItem: FC<PropTypes> = ({ children, onClick }) => (
  <Item onClick={onClick}>{children}</Item>
);

export default ListItem;
