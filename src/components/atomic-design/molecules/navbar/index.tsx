import React, { FC } from 'react';

import useScroll from '../../../../hooks/useScroll';
import { BurguerIcon, Button, Container, CustomLink, Icon } from '../../atoms';
import { NavList } from '../../organisms';

import { Header, Content, Background, Navigation, Burger } from './styles';

interface PropTypes {
  showSidebar?: () => void;
  path?: string;
}

export const Navbar: FC<PropTypes> = ({ showSidebar, path }) => {
  const isFixed = useScroll();

  return (
    <Header>
      <Background isFixed={isFixed} />
      <Container>
        <Content isFixed={isFixed}>
          <CustomLink to="/">
            <Icon ariaLabel="Disandev branding" icon="brand" />
          </CustomLink>
          <Navigation>
            <NavList noSelected gap="40px" path={path} orientation="horizontal" showContact />
          </Navigation>
          <Burger>
            <Button variant="icon" ariaLabel="Burguer Icon" onClick={showSidebar}>
              <BurguerIcon />
            </Button>
          </Burger>
        </Content>
      </Container>
    </Header>
  );
};
