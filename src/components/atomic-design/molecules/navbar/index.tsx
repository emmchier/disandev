import React, { FC } from 'react';
import useScroll from '../../../../hooks/useScroll';
import BurguerIcon from '../../atoms/burguer-icon';
import Button from '../../atoms/button';
import Container from '../../atoms/container';
import CustomLink from '../../atoms/custom-link';
import Icon from '../../atoms/icon';

import { Header, Content, Background } from './styles';

interface PropTypes {
  showSidebar?: () => void;
}

const Navbar: FC<PropTypes> = ({ showSidebar }) => {
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

export default Navbar;
