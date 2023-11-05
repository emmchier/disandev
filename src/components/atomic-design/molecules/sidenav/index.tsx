import React, { FC } from 'react';
import { useRouter } from 'next/router';

import { ButtonContact, CustomLink, Icon, Overlay, Selected } from '../../atoms';
import { NavList, SocialMediaList } from '../../organisms';

import { MenuContent, Content, CloseBtn, SocialMediaContent } from './styles';
import { List } from '../list';
import { ListItem } from '../list/item-list';

interface PropTypes {
  path?: string;
  show?: boolean;
  showSidebar: () => void;
}

export const Sidenav: FC<PropTypes> = ({ path, show, showSidebar }) => {
  const router = useRouter();

  const handleContact = () => {
    showSidebar();
    router.push('/contact');
  };

  return (
    <>
      <MenuContent isShowing={show}>
        <CloseBtn onClick={showSidebar}>
          <Icon ariaLabel="close button" icon="close" />
        </CloseBtn>
        <Content>
          <div>
            <List alignItems="start">
              <ListItem onClick={showSidebar}>
                <CustomLink to="/projects">
                  <Selected>Projects</Selected>
                </CustomLink>
              </ListItem>
              <ListItem onClick={showSidebar}>
                <CustomLink to="/contact">
                  <Selected>Contact</Selected>
                </CustomLink>
              </ListItem>
            </List>
            <SocialMediaContent>
              <SocialMediaList />
            </SocialMediaContent>
          </div>
        </Content>
      </MenuContent>
      <Overlay isShowing={show} onClick={showSidebar} />
    </>
  );
};
