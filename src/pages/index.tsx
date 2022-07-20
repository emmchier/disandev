import type { NextPage, GetStaticProps } from 'next';
import { usePageMetadata } from '../hooks/usePageMetadata';
import Heading from '../components/atomic-design/atoms/heading';
import { PageInterface, ProjectI, ServiceI } from '../interfaces';
import Page from '../components/atomic-design/atoms/page';
import Section from '../components/atomic-design/atoms/section';
import { client } from '../common/contentfulClientProvider';
import Container from '../components/atomic-design/atoms/container';
import Link from 'next/link';
import Image from 'next/image';
import { getItemsByPage } from '../helpers/functions';
import Text from '../components/atomic-design/atoms/text';

interface Props {
  pages: PageInterface[];
  projects: ProjectI[];
  services: ServiceI[];
}

const HomePage: NextPage<Props> = ({ pages, projects, services }) => {
  const { title, description, keywords } = usePageMetadata(pages, 'home');
  const filteredProjectList = getItemsByPage(projects, 'home');
  const filteredServicesList = getItemsByPage(services, 'home');

  return (
    <Page title={title} description={description} keywords={keywords}>
      <Container>
        <Section>
          <Heading variant="h2" weight="regular">
            {title}
          </Heading>
          <ul>
            {filteredProjectList?.map((project) => (
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
        <Section>
          <ul>
            {filteredServicesList?.map((service) => (
              <li key={service.fields.name}>
                <Image
                  src={`https:${service.fields.cover.fields.file.url}`}
                  height={200}
                  width={200}
                  alt={service.fields.name}
                  priority
                />
                <Heading variant="h4">{service.fields.name}</Heading>
                <Text>{service.fields.description}</Text>
              </li>
            ))}
          </ul>
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
