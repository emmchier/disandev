import type { GetStaticProps, NextPage } from 'next';
import { usePageMetadata } from '../hooks/usePageMetadata';
import Heading from '../components/atomic-design/atoms/heading';
import { PageInterface } from '../interfaces';
import Page from '../components/atomic-design/atoms/page';
import { client } from '../common/contentfulClientProvider';
import BackButton from '../components/atomic-design/atoms/back-button';
import { useRouter } from 'next/router';
import Row from '../components/atomic-design/molecules/grid/row';
import Col from '../components/atomic-design/molecules/grid/col';
import { ContactCol } from '../styles/pages/error-styles';
import { SendContent } from '../styles/pages/contact-styles';
import Image from 'next/image';
import ContactForm from '../components/atomic-design/organisms/contact-form';
import { useContext, useEffect } from 'react';
import { MainContext } from '../context';
import Loading from '../components/atomic-design/atoms/loading';
import Container from '../components/atomic-design/atoms/container';

interface Props {
  pages: PageInterface[];
  content: PageInterface[];
}

const ContactPage: NextPage<Props> = ({ pages }) => {
  const { title, description, keywords, tag } = usePageMetadata(pages, 'contact');
  const navigate = useRouter();

  const { setShowSnackbar, loading, setLoading, response, setResponse } = useContext(MainContext);

  useEffect(() => {
    setResponse(0);
    setLoading(false);
  }, []);

  return (
    <Page title={title} description={description} keywords={keywords} tag={tag}>
      {loading === true && <Loading onShowing={loading} onFinish={response} />}
      <Container>
        <BackButton navigate={() => navigate.back()} />
        <Row>
          <Col xs={12} sm={4} md={6} lg={6} xlg={6}>
            <ContactCol>
              <Heading variant="h2" weight="regular">
                Contanos qué
                <span> tenes en mente</span>
              </Heading>
              <Heading variant="h4" weight="bold">
                y comencemos a hacer
                <span> realidad tu idea.</span>
              </Heading>
              <SendContent>
                <Image
                  src={'/images/icons/contact-send.png' || '/images/default-bg.svg'}
                  alt="Our values image reference"
                  height="200%"
                  width="250%"
                  objectFit="contain"
                  priority
                />
              </SendContent>
            </ContactCol>
          </Col>
          <Col xs={12} sm={4} md={6} lg={6} xlg={6}>
            <ContactCol>
              <ContactForm
                setShowLoading={setLoading}
                setResponse={setResponse}
                setShowSnackbar={setShowSnackbar}
              />
            </ContactCol>
          </Col>
        </Row>
      </Container>
    </Page>
  );
};

export default ContactPage;

export const getStaticProps: GetStaticProps = async () => {
  const res = await client.getEntries({ content_type: 'pages' });
  return {
    props: {
      pages: res?.items,
    },
  };
};
