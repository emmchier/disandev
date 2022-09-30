import React, { FC } from 'react';
import { useRouter } from 'next/router';

import { ButtonContact, Icon, Overlay } from '../../atoms';
import { NavList, SocialMediaList } from '../../organisms';

import { MenuContent, Content, CloseBtn, SocialMediaContent } from './styles';

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
            <NavList path={path} showSidebar={showSidebar} />
            <ButtonContact onClick={handleContact} />
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
