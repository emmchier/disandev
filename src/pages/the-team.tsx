import type { NextPage, GetStaticProps } from 'next';
import { usePageMetadata } from '../hooks/usePageMetadata';
import Heading from '../components/atomic-design/atoms/heading';
import Text from '../components/atomic-design/atoms/text';
import { PageInterface } from '../interfaces';
import Page from '../components/atomic-design/atoms/page';
import Section from '../components/atomic-design/atoms/section';
import { client } from '../common/contentfulClientProvider';
import Container from '../components/atomic-design/atoms/container';

interface Props {
  pages: PageInterface[];
}

const TeamPage: NextPage<Props> = ({ pages }) => {
  const { title, description, keywords } = usePageMetadata(pages, 'the-team');

  return (
    <Page title={title} description={description} keywords={keywords}>
      <Container>
        <Section>
          <Heading variant="h2" weight="regular">
            {title}
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, perspiciatis soluta
            deleniti odio eligendi nostrum a quibusdam cumque rem minus tempora voluptates, sunt
            alias amet ad et nulla praesentium impedit!
          </Text>
        </Section>
      </Container>
    </Page>
  );
};

export default TeamPage;

export const getStaticProps: GetStaticProps = async () => {
  const res = await client.getEntries({ content_type: 'pages' });
  return {
    props: {
      pages: res.items,
    },
  };
};
