import type { NextPage } from 'next';
import Heading from '../components/atomic-design/atoms/heading';
import { PageInterface } from '../interfaces';
import Page from '../components/atomic-design/atoms/page';
import Section from '../components/atomic-design/atoms/section';
import Container from '../components/atomic-design/atoms/container';
import Link from 'next/link';

interface Props {
  pages: PageInterface[];
}

const NotFound: NextPage<Props> = () => {
  return (
    <Page title={'title'} description={'description'} keywords={'keywords'}>
      <Container>
        <Section>
          <Heading variant="h2" weight="regular">
            UPSSS
          </Heading>
          <Link href="/">Back to Home</Link>
        </Section>
      </Container>
    </Page>
  );
};

export default NotFound;

// export const getStaticProps: GetStaticProps = async () => {
//   const res = await client.getEntries({ content_type: '404' });
//   return {
//     props: {
//       pages: res.items,
//     },
//   };
// };
