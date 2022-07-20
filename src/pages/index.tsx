import type { NextPage, GetStaticProps } from 'next';
import { usePageMetadata } from '../hooks/usePageMetadata';
import Heading from '../components/atomic-design/atoms/heading';
import Text from '../components/atomic-design/atoms/text';
import { PageInterface, ProjectI, ServiceI } from '../interfaces';
import Page from '../components/atomic-design/atoms/page';
import Section from '../components/atomic-design/atoms/section';
import { client } from '../common/contentfulClientProvider';
import Container from '../components/atomic-design/atoms/container';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
  pages: PageInterface[];
  projects: ProjectI[];
  services: ServiceI[];
}

const HomePage: NextPage<Props> = ({ pages, projects }) => {
  const { title, description, keywords } = usePageMetadata(pages, 'home');

  return (
    <Page title={title} description={description} keywords={keywords}>
      <Container>
        <Section>
          <Heading variant="h2" weight="regular">
            {title}
          </Heading>
          {projects?.map((project) => (
            <Link key={project.fields.slug} href={`/project/${project.fields.slug}`}>
              <a>
                <Image
                  src={`https:${project.fields.cover.fields.file.url}`}
                  height={200}
                  width={200}
                  key={project.fields.slug}
                  alt={project.fields.name}
                />
                <Heading variant="h4">{project.fields.name}</Heading>
              </a>
            </Link>
          ))}
        </Section>
      </Container>
    </Page>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
  const res = await client.getEntries({ content_type: 'pages' });
  const projects = await client.getEntries({ content_type: 'proyectos' });
  const services = await client.getEntries({ content_type: 'services' });

  return {
    props: {
      pages: res.items,
      projects: projects.items,
      services: services.items,
    },
  };
};
