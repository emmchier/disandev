import { useRouter } from 'next/router';
import React, { FC } from 'react';

import ButtonContact from '../../atoms/button-contact';
import Icon from '../../atoms/icon';
import Overlay from '../../atoms/overlay';
import NavList from '../../organisms/nav-list';
import SocialMediaList from '../../organisms/social-media-list';

import { MenuContent, Content, CloseBtn, SocialMediaContent } from './styles';

interface PropTypes {
  path?: string;
  show?: boolean;
  showSidebar: () => void;
}

const Sidenav: FC<PropTypes> = ({ path, show, showSidebar }) => {
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

export default Sidenav;
