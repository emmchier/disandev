import React, { FC } from 'react';

import Container from '../../atoms/container';
import DinamicContent from '../../atoms/dinamic-content';
import Heading from '../../atoms/heading';
import Icon from '../../atoms/icon';
import Text from '../../atoms/text';
import NavList from '../../organisms/nav-list';
import SocialMediaList from '../../organisms/social-media-list';
import Col from '../grid/col';
import Row from '../grid/row';

import {
  FooterContent,
  BrandContent,
  InfoContent,
  Copyright,
  IsoContent,
  CopyContent,
  NavLeft,
  NavRight,
  CopyrightContainer,
  FooterMainContent,
} from './styles';

import CustomLink from '../../atoms/custom-link';

type Props = {
  path?: string;
};

const Footer: FC<Props> = ({ path }) => {
  return (
    <FooterContent>
      <Container>
        <FooterMainContent>
          <Row>
            <Col xs={12} sm={12} md={3} lg={3} xlg={3}>
              <DinamicContent>
                <BrandContent>
                  <IsoContent>
                    <Icon ariaLabel="Disandev isotype" icon="iso" />
                  </IsoContent>
                  <Icon ariaLabel="Disandev branding" icon="brand" />
                </BrandContent>
              </DinamicContent>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xlg={6}>
              <Row>
                <Col xs={12} sm={12} md={6} lg={6} xlg={6}>
                  <DinamicContent>
                    <NavLeft>
                      <NavList path={path} noSelected={true} />
                    </NavLeft>
                  </DinamicContent>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xlg={6}>
                  <DinamicContent>
                    <NavRight>
                      <NavList path={path} noSelected={true} />
                    </NavRight>
                  </DinamicContent>
                </Col>
              </Row>
            </Col>
            <Col xs={12} sm={12} md={3} lg={3} xlg={3}>
              <DinamicContent>
                <InfoContent>
                  <Heading variant="h6" weight="medium" cap="upper">
                    We are in
                  </Heading>
                  <Text>Buenos Aires. Argentina</Text>
                  <Text>Barcelona. España</Text>
                </InfoContent>
              </DinamicContent>
            </Col>
          </Row>
        </FooterMainContent>
      </Container>
      <Copyright>
        <Container>
          <CopyrightContainer>
            <DinamicContent alignItems="start">
              <CopyContent>
                <Text>{new Date().getFullYear()} © Disandev</Text>
                <span>|</span>
                <CustomLink to="/quality-policy">
                  <Text>Quality policy</Text>
                </CustomLink>
              </CopyContent>
            </DinamicContent>
            <DinamicContent alignItems="end">
              <SocialMediaList />
            </DinamicContent>
          </CopyrightContainer>
        </Container>
      </Copyright>
    </FooterContent>
  );
};

export default Footer;
