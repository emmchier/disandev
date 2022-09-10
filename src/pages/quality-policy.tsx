import type { GetStaticProps, NextPage } from 'next';
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
  MainContent,
} from '../styles/pages/quality-policy-styles';
import Text from '../components/atomic-design/atoms/text';
import Link from 'next/link';
import Button from '../components/atomic-design/atoms/button';
import { client } from '../common/contentfulClientProvider';

interface Props {
  pages: PageInterface[];
  content: PageInterface[];
}

const QualityPolicyPage: NextPage<Props> = ({ pages }) => {
  const { title, description, keywords, tag } = usePageMetadata(pages, 'quality-policy');

  return (
    <Page title={title} description={description} keywords={keywords} tag={tag}>
      <MainContent>
        <Container>
          <PageHeaderContainer>
            <PageHeader>
              <span>
                This is our <div>quality policy</div>
                <b>.</b>
              </span>
            </PageHeader>
            <Icon icon="teamShape" ariaLabel="geometric shape" />
          </PageHeaderContainer>
        </Container>
        <QualityContent>
          <Container size="sm">
            <Heading variant="h4">Who are we?</Heading>
            <Text>
              We are Disandev, a Start up with offices in Spain and Argentina, dedicated to digital
              products, tool development and software products. The objective of this platform will
              be to let you know our services, tell you about our philosophy as a company and our
              way of working to offer you the best experience.
            </Text>
            <Heading variant="h4">Quality in what we do</Heading>
            <Text>
              We believe in quality over quantity and we try to work side by side with each client.
              By contracting our services we will be a single team that transcends the barrier
              between provider and applicant.
            </Text>
            <Text>
              We have the quality of Design and Functionality in a single priority line, without
              highlighting one over the other. We believe that the best product is the one where
              users finds the direct satisfaction of their needs by themselves.
            </Text>
          </Container>
        </QualityContent>
        <ValuesContent>
          <Container size="sm">
            <Heading variant="h4">How we work?</Heading>
            <Text>
              We know that each client has specific needs. For this reason, we are flexible and
              create solutions based on a personalized design adapted to the circumstances of each
              project.
            </Text>
            <Text>
              We firmly believe that there is no problem without a solution. Where some people see
              barriers, those of us who work at Disandev see possibilities. We are not conformists
              and we explore the different alternatives that allow us to discover multiple solutions
              and select the most optimal one.
            </Text>
            <Text>
              We intend to guarantee your product the quality and efficiency it deserves,
              maintaining fluid communication, where we can capture step by step the realization of
              what your business needs to grow.
            </Text>
          </Container>
        </ValuesContent>
        <QualityContent>
          <Container size="sm">
            <Heading variant="h4">Cookies</Heading>
            <Text>
              By entering our platform we will not be saving information or sensitive data of any
              kind that infringe your privacy. We will only ask for your permission to use
              third-party cookies that help us keep track of the traffic of visits to our website
              through Google Analytics. We are interested in you, browsing safely and respecting the
              laws on the use of cookies. To learn more about this, we invite you to read our
              <Link href="/cookies">Cookies Policy</Link>.
            </Text>
          </Container>
        </QualityContent>
        <ValuesContent>
          <Container size="sm">
            <Text>
              These are our quality policies and we are pleased that you have chosen us to work as a
              team.
            </Text>
          </Container>
        </ValuesContent>
      </MainContent>
    </Page>
  );
};

export default QualityPolicyPage;

export const getStaticProps: GetStaticProps = async () => {
  const res = await client.getEntries({ content_type: 'pages' });
  return {
    props: {
      pages: res?.items,
    },
  };
};
