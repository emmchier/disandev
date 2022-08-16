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
import {
  PageHeaderContainer,
  QualityContent,
  ValuesContent,
} from '../styles/pages/quality-policy-styles';

interface Props {
  pages: PageInterface[];
  content: PageInterface[];
}

const QualityPolicyPage: NextPage<Props> = ({ pages }) => {
  const { title, description, keywords } = usePageMetadata(pages, 'quality-policy');

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
      <Heading variant="h2" weight="regular">
        {title}
      </Heading>
      <QualityContent>
        <Container>
          <p>
            Disandev we are a Start up dedicated to the development of digital tools and products of
            all kinds. We believe in quality over quantity, in teamwork side by side with each
            client, where we are a single team that transcends the barrier between supplier and
            applicant.
          </p>
          <p>
            We have the quality of Design and Functionality in a single priority line, without
            highlighting one over the other, we believe that the best product is the one where the
            user finds the direct satisfaction of his need by himself, where the usability is
            friendly and is tailored to the type of user who will use it.
          </p>
          <p>
            We know that each client has specific needs. For this reason, we are flexible and create
            solutions based on a personalized design adapted to the circumstances of each project.
          </p>
        </Container>
      </QualityContent>
      <ValuesContent>
        <Section>
          <p>
            We firmly believe that there is no problem without a solution. Where some people see
            barriers, those of us who work at Cromac see possibilities. We explore the different
            alternatives that allow us to discover multiple solutions and select the most optimal.
          </p>
          <p>
            We intend to guarantee your product the quality and efficiency it deserves, maintaining
            fluid communication day by day, where we can shape step by step the realization of what
            your business needs to grow.
          </p>
          <p>
            These are our quality policies and we are pleased that you have chosen us to work as a
            team.
          </p>
        </Section>
      </ValuesContent>
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
