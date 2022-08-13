import type { NextPage, GetStaticProps } from 'next';
import { usePageMetadata } from '../hooks/usePageMetadata';
import Heading from '../components/atomic-design/atoms/heading';
import Text from '../components/atomic-design/atoms/text';
import { PageInterface } from '../interfaces';
import Page from '../components/atomic-design/atoms/page';
import Section from '../components/atomic-design/atoms/section';
import { client } from '../common/contentfulClientProvider';
import Container from '../components/atomic-design/atoms/container';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useEffect, useState } from 'react';
import Icon from '../components/atomic-design/atoms/icon/index';
import PageHeader from '../components/atomic-design/atoms/page-header/index';

interface Props {
  pages: PageInterface[];
  content: PageInterface[];
}

const QualityPolicyPage: NextPage<Props> = ({ pages, content }) => {
  const { title, description, keywords } = usePageMetadata(pages, 'quality-policy');

  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, [showContent]);

  return (
    <Page title={title} description={description} keywords={keywords}>
      <Container>
        <Section>
          <PageHeader>
            <span>
              Because <b>we are careful</b>
            </span>
            to provide your best experience
            <br />
            meet our quality policy
          </PageHeader>
          <Icon icon="teamShape" ariaLabel="geometric shape" />
        </Section>
        <Section>
          <Heading variant="h2" weight="regular">
            {title}
          </Heading>
          {documentToReactComponents(showContent && content[0].fields.content)}
        </Section>
      </Container>
    </Page>
  );
};

export default QualityPolicyPage;

export const getStaticProps: GetStaticProps = async () => {
  const res = await client.getEntries({ content_type: 'pages' });
  const content = await client.getEntries({ content_type: 'qualityPolicy' });
  return {
    props: {
      pages: res?.items,
      content: content?.items,
    },
  };
};
