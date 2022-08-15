import type { NextPage } from 'next';
import { usePageMetadata } from '../hooks/usePageMetadata';
import Heading from '../components/atomic-design/atoms/heading';
import { PageInterface } from '../interfaces';
import Page from '../components/atomic-design/atoms/page';
import Section from '../components/atomic-design/atoms/section';
// import { client } from '../common/contentfulClientProvider';
import Container from '../components/atomic-design/atoms/container';
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
// import { useEffect, useState } from 'react';
import Icon from '../components/atomic-design/atoms/icon/index';
import PageHeader from '../components/atomic-design/atoms/page-header/index';
import { PageHeaderContainer, QualityContent } from '../styles/pages/quality-policy-styles';

interface Props {
  pages: PageInterface[];
  content: PageInterface[];
}

const QualityPolicyPage: NextPage<Props> = ({ pages }) => {
  const { title, description, keywords } = usePageMetadata(pages, 'quality-policy');

  // const [showContent, setShowContent] = useState(false);

  // useEffect(() => {
  //   setShowContent(true);
  // }, [showContent]);

  return (
    <Page title={title} description={description} keywords={keywords}>
      <Container>
        <PageHeaderContainer>
          <PageHeader>
            <span>
              Because <div>we are careful</div>
            </span>
            to provide your best experience
            <br />
            meet our quality policy<b>.</b>
          </PageHeader>
          <Icon icon="teamShape" ariaLabel="geometric shape" />
        </PageHeaderContainer>
      </Container>
      <Section>
        <QualityContent>
          <Heading variant="h2" weight="regular">
            {title}
          </Heading>
          <QualityContent>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam expedita ut harum quis
              beatae perspiciatis repudiandae error doloribus voluptate dignissimos? Deleniti error
              officia veritatis praesentium iure cumque laborum provident a.
            </p>
          </QualityContent>
        </QualityContent>
      </Section>
    </Page>
  );
};

export default QualityPolicyPage;

// export const getStaticProps: GetStaticProps = async () => {
//   const res = await client.getEntries({ content_type: 'pages' });
//   const content = await client.getEntries({ content_type: 'qualityPolicy' });
//   return {
//     props: {
//       pages: res?.items,
//       content: content?.items,
//     },
//   };
// };
