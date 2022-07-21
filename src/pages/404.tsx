import type { NextPage } from 'next';
import Image from 'next/image';

import { PageInterface } from '../interfaces';

import Heading from '../components/atomic-design/atoms/heading';
import Section from '../components/atomic-design/atoms/section';
import Container from '../components/atomic-design/atoms/container';
import Row from '../components/atomic-design/molecules/grid/row';
import Col from '../components/atomic-design/molecules/grid/col';
import Page from '../components/atomic-design/atoms/page';
import Button from '../components/atomic-design/atoms/button';
import CustomLink from '../components/atomic-design/atoms/custom-link';

import { ContactCol, ErrorContent } from '../styles/pages/error-styles';

interface Props {
  pages: PageInterface[];
}

const NotFound: NextPage<Props> = () => {
  return (
    <Page
      title={'Upsss...'}
      description={'An error has occurred. Please back to home.'}
      keywords={'Error 404'}
    >
      <Section auto={false}>
        <Container>
          <Row>
            <Col xs={12} sm={4} md={6} lg={6} xlg={6}>
              <ContactCol>
                <ErrorContent>
                  <Heading variant="h2" weight="regular">
                    Uy, algo salió mal
                  </Heading>
                  <Heading variant="h4" weight="bold">
                    Verificá tu conexión y<span> volvé a recargar la página.</span>
                  </Heading>
                  <CustomLink to="/">
                    <Button variant="outlined" iconLeft={true}>
                      Back to home
                    </Button>
                  </CustomLink>
                </ErrorContent>
              </ContactCol>
            </Col>
            <Col xs={12} sm={4} md={6} lg={6} xlg={6}>
              <ContactCol>
                <Image
                  src="/images/icons/no-conection.png"
                  alt="Error image reference"
                  width={350}
                  height={300}
                  priority
                />
              </ContactCol>
            </Col>
          </Row>
        </Container>
      </Section>
    </Page>
  );
};

export default NotFound;
