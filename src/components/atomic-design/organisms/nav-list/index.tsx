import React, { FC, useEffect, useState } from 'react';

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
  showPolicy?: boolean;
  showContact?: boolean;
  showSidebar?: () => any;
};

interface NavlistI {
  id: number;
  label?: string;
  to: string;
}

const NavList: FC<Props> = ({
  path = '',
  orientation = 'vertical',
  noSelected = false,
  showPolicy = false,
  showContact = false,
  showSidebar,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const getFilteredList = () =>
    showPolicy === false && showContact === false
      ? navList?.filter((item) => item.to !== '/quality-policy' && item.to !== '/contact')
      : navList;

  return (
    <List alignItems="start" orientation={orientation}>
      {getFilteredList()?.map((item: NavlistI) => (
        <ListItem key={item.label} onClick={showSidebar}>
          <CustomLink to={item.to}>
            <>
              {item.to === path ? (
                !noSelected ? (
                  <FullSelected>{item.label}</FullSelected>
                ) : (
                  <FullNotSelected>{item.label}</FullNotSelected>
                )
              ) : (
                <Selected noSelected={noSelected}>{item.label}</Selected>
              )}
            </>
          </CustomLink>
        </ListItem>
      ))}
    </List>
  );
};

export default NavList;
