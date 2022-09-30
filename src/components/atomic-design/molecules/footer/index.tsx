import React, { FC } from 'react';

import { Container, DinamicContent, Heading, Icon, Text } from '../../atoms';
import { Row, Col } from '../../molecules';
import { NavList, SocialMediaList } from '../../organisms';

import {
  FooterContent,
  BrandContent,
  InfoContent,
  Copyright,
  IsoContent,
  NavLeft,
  NavRight,
  CopyrightContainer,
  FooterMainContent,
} from './styles';

type Props = {
  path?: string;
};

export const Footer: FC<Props> = ({ path }) => (
  <FooterContent>
    <Container>
      <FooterMainContent>
        <Row>
          <Col xs={12} sm={12} md={3} lg={3} xlg={3}>
            <BrandContent>
              <IsoContent>
                <Icon ariaLabel="Disandev isotype" icon="iso" />
              </IsoContent>
              <Icon ariaLabel="Disandev branding" icon="brand" />
            </BrandContent>
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
                    <NavList path={path} noSelected={true} showPolicy={true} showContact={true} />
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
                <Text>Buenos Aires, Argentina</Text>
                <Text>Barcelona, Spain</Text>
              </InfoContent>
            </DinamicContent>
          </Col>
        </Row>
      </FooterMainContent>
    </Container>

    <Copyright>
      <Container>
        <CopyrightContainer>
          <Text>
            {new Date().getFullYear()} © Disandev <div>|</div> <span>somos.disandev@gmail.com</span>
          </Text>
          <SocialMediaList />
        </CopyrightContainer>
      </Container>
    </Copyright>
  </FooterContent>
);
