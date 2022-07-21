import React, { FC, useEffect, useState } from 'react';

import Text from '../../atoms/text';
import List from '../../molecules/list';
import ListItem from '../../molecules/list/item-list';

import { FullNotSelected, FullSelected } from './styles';
import { navList } from '../../../../domain/nav-list';
import Selected from '../../atoms/selected';
import CustomLink from '../../atoms/custom-link';

type Props = {
  path?: string;
  orientation?: string;
  noSelected?: boolean;
};

interface NavlistI {
  id: number;
  label?: string;
  to: string;
}

const NavList: FC<Props> = ({ path = '', orientation = 'vertical', noSelected = false }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <List alignItems="start" orientation={orientation}>
      {navList?.map((item: NavlistI) => (
        <ListItem key={item.label}>
          <CustomLink to={item.to}>
            <div>
              {item.to === path ? (
                !noSelected ? (
                  <FullSelected>{item.label}</FullSelected>
                ) : (
                  <FullNotSelected>{item.label}</FullNotSelected>
                )
              ) : (
                <Selected noSelected={noSelected}>{item.label}</Selected>
              )}
            </div>
          </CustomLink>
        </ListItem>
      ))}
    </List>
  );
};

export default NavList;
