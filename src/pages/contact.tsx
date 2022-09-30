import { useContext, useEffect } from 'react';

import type { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { MainContext } from '../context';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { PageInterface } from '../interfaces';
import { client } from '../common/contentfulClientProvider';

import { Heading, Page, BackButton, Loading, Container } from '../components/atomic-design/atoms';
import { Row, Col } from '../components/atomic-design/molecules';
import { ContactForm } from '../components/atomic-design/organisms';

import { SendContent, TextContent, ActionBack, ContactCol } from '../styles/pages/contact-styles';

interface Props {
  pages: PageInterface[];
  content: PageInterface[];
}

const ContactPage: NextPage<Props> = ({ pages }) => {
  const { title, description, keywords } = usePageMetadata(pages, 'contact');
  const navigate = useRouter();

  const { setShowSnackbar, loading, setLoading, response, setResponse } = useContext(MainContext);

  useEffect(() => {
    setResponse(0);
    setLoading(false);
  }, []);

  return (
    <Page title={title} description={description} keywords={keywords}>
      {loading === true && <Loading onShowing={loading} onFinish={response} />}

      <Container>
        <Row>
          <Col xs={12} sm={4} md={6} lg={6} xlg={6}>
            <ContactCol>
              <ActionBack>
                <BackButton navigate={() => navigate.back()} />
              </ActionBack>
              <TextContent>
                <Heading variant="h3" weight="regular">
                  Let us know what
                  <span> you have in mind</span>
                </Heading>
                <Heading variant="h5" weight="bold">
                  and let´s start making
                  <span> your idea come true.</span>
                </Heading>
              </TextContent>
              <SendContent>
                <Image
                  src={'/images/icons/contact-send.png' || '/images/default-bg.svg'}
                  alt="Our values image reference"
                  width={150}
                  height={150}
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
