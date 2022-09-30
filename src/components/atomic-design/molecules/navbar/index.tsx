import React, { FC } from 'react';

import useScroll from '../../../../hooks/useScroll';
import { BurguerIcon, Button, Container, CustomLink, Icon } from '../../atoms';

import { Header, Content, Background } from './styles';

interface PropTypes {
  showSidebar?: () => void;
}

export const Navbar: FC<PropTypes> = ({ showSidebar }) => {
  const isFixed = useScroll();

  return (
    <Header>
      <Background isFixed={isFixed} />
      <Container>
        <Content isFixed={isFixed}>
          <CustomLink to="/">
            <Icon ariaLabel="Disandev branding" icon="brand" />
          </CustomLink>
          <Button variant="icon" ariaLabel="Burguer Icon" onClick={showSidebar}>
            <BurguerIcon />
          </Button>
        </Content>
      </Container>
    </Header>
  );
};
