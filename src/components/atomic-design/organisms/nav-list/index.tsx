import Link from 'next/link';
import React, { FC } from 'react';

import { FullNotSelected, FullSelected } from './styles';

type Props = {
  path?: string;
  orientation?: string;
  noSelected?: boolean;
};

const NavList: FC<Props> = ({ path, orientation = 'vertical', noSelected = false }) => {
  return (
    <List alignItems="start" orientation={orientation}>
      {navList?.map((item) => (
        <ListItem key={item.id}>
          <Link href={item.to}>
            <Text>
              {item.to === path ? (
                !noSelected ? (
                  <FullSelected>{item.label}</FullSelected>
                ) : (
                  <FullNotSelected>{item.label}</FullNotSelected>
                )
              ) : (
                <Selected noSelected={noSelected}>{item.label}</Selected>
              )}
            </Text>
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

export default NavList;
