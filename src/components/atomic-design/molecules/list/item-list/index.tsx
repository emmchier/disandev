import React, { FC } from 'react';

import { Item } from './styles';

interface PropTypes {
  children: React.ReactNode;
}

const ListItem: FC<PropTypes> = ({ children }) => <Item>{children}</Item>;

export default ListItem;
