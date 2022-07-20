import type { NextPage, GetStaticProps } from 'next';
import { usePageMetadata } from '../hooks/usePageMetadata';
import Heading from '../components/atomic-design/atoms/heading';
import { PageInterface, ProjectI } from '../interfaces';
import Page from '../components/atomic-design/atoms/page';
import Section from '../components/atomic-design/atoms/section';
import { client } from '../common/contentfulClientProvider';
import Container from '../components/atomic-design/atoms/container';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
  pages: PageInterface[];
  projects: ProjectI[];
}

const ProjectsPage: NextPage<Props> = ({ pages, projects }) => {
  const { title, description, keywords } = usePageMetadata(pages, 'projects');

  return (
    <Page title={title} description={description} keywords={keywords}>
      <Container>
        <Section>
          <Heading variant="h2" weight="regular">
            {title}
          </Heading>
          <ul>
            {projects?.map((project) => (
              <li key={project.fields.slug}>
                <Link href={`/project/${project.fields.slug}`}>
                  <a>
                    <Image
                      src={`https:${project.fields.cover.fields.file.url}`}
                      height={200}
                      width={200}
                      alt={project.fields.name}
                      priority
                    />
                    <Heading variant="h4">{project.fields.name}</Heading>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      </Container>
    </Page>
  );
};

export default ProjectsPage;

export const getStaticProps: GetStaticProps = async () => {
  const res = await client.getEntries({ content_type: 'pages' });
  const projects = await client.getEntries({ content_type: 'proyectos' });

  return {
    props: {
      pages: res?.items,
      projects: projects?.items,
    },
  };
};
