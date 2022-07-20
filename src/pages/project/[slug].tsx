import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { client } from '../../common/contentfulClientProvider';
import Container from '../../components/atomic-design/atoms/container';
import Heading from '../../components/atomic-design/atoms/heading';
import Page from '../../components/atomic-design/atoms/page';
import Section from '../../components/atomic-design/atoms/section';
import Text from '../../components/atomic-design/atoms/text';
import { usePageMetadata } from '../../hooks/usePageMetadata';
import { PageInterface, ProjectI } from '../../interfaces';

interface Props {
  pages: PageInterface[];
  project: ProjectI;
}

const ProjectDetail: NextPage<Props> = ({ pages, project }) => {
  const { title, description, keywords } = usePageMetadata(pages, project?.fields?.slug);

  return (
    <Page title={`Projects | ${title}`} description={description} keywords={keywords}>
      <Container>
        <Section>
          <Heading variant="h2" weight="regular">
            {project?.fields?.name}
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

export default ProjectDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = await client.getEntries({
    content_type: 'proyectos',
  });

  const paths = projects?.items.map((item: ProjectI) => {
    return {
      params: { slug: item?.fields?.slug },
    };
  });
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: 'proyectos',
    'fields.slug': params?.slug,
  });
  const res = await client.getEntries({
    content_type: 'pages',
  });

  if (!items.length) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      pages: res.items,
      project: items[0],
      revalidate: 1,
    },
  };
};
