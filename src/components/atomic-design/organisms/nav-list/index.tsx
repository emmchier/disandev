import React, { FC, useEffect, useState } from 'react';

import { navList } from '../../../../domain/nav-list';

import { Selected, CustomLink } from '../../atoms';
import { List, ListItem } from '../../molecules';

import { FullNotSelected, FullSelected } from './styles';

type Props = {
  path?: string;
  orientation?: string;
  noSelected?: boolean;
  showPolicy?: boolean;
  showContact?: boolean;
  showSidebar?: () => any;
  gap?: string;
};

interface NavlistI {
  id: number;
  label?: string;
  to: string;
}

export const NavList: FC<Props> = ({
  path = '',
  orientation = 'vertical',
  noSelected = false,
  showPolicy = false,
  showContact = false,
  gap,
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
    <List spaceY={gap} alignItems="start" orientation={orientation}>
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
