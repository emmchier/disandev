import type { NextPage, GetStaticProps } from 'next';

import { usePageMetadata } from '../hooks/usePageMetadata';
import { PageInterface, ProjectI, ServiceI } from '../interfaces';
import { client } from '../common/contentfulClientProvider';
import { getItemsByPage } from '../helpers/functions';

import {
  Heading,
  Page,
  Section,
  Container,
  CustomLink,
  SectionHeader,
  Button,
  Icon,
} from '../components/atomic-design/atoms';
import { Core, CallToAction } from '../components/atomic-design/molecules';
import { ProjectList, ServiceSection } from '../components/atomic-design/organisms';

import {
  ActionContent,
  Content,
  HomeContent,
  ProjectSectionContent,
  TextContent,
  ServiceContainer,
} from '../styles/pages/home-styles';
import { useMemo } from 'react';

interface Props {
  pages: PageInterface[];
  projects: ProjectI[];
  services: ServiceI[];
}

const HomePage: NextPage<Props> = ({ pages, projects, services }) => {
  const { title, description, keywords } = useMemo(() => {
    return usePageMetadata(pages, 'home');
  }, [pages]);
  const filteredProjectList = useMemo(() => {
    return getItemsByPage(projects, 'home');
  }, [projects]);
  const filteredServicesList = useMemo(() => {
    return getItemsByPage(services, 'home');
  }, [services]);
  const orderedProjectList = useMemo(() => {
    return filteredProjectList.sort((a, b) => a.fields.order - b.fields.order);
  }, [filteredProjectList]);
  const orderedServiceList = useMemo(() => {
    return filteredServicesList.sort((a, b) => a.fields.order - b.fields.order);
  }, [filteredServicesList]);

  const handleAnchor = () => {
    window.scrollTo({ top: 680, behavior: 'smooth' });
  };

  return (
    <Page title={title} description={description} keywords={keywords}>
      <Section auto={false} container="none">
        <Container>
          <Content>
            <HomeContent>
              <TextContent>
                <SectionHeader variant="h1">
                  <span>We create digital solutions</span>
                  to make an impression
                  <b>.</b>
                </SectionHeader>
              </TextContent>
            </HomeContent>
          </Content>
        </Container>
        <Core />
      </Section>

      <Section padding={`-bottom: 60px`}>
        <ProjectSectionContent>
          <SectionHeader>
            <span>What we have been</span>
            <p>
              working on
              <b>.</b>
            </p>
          </SectionHeader>
          <ProjectList list={orderedProjectList} />
        </ProjectSectionContent>
        <ActionContent>
          <CustomLink to="/projects">
            <Button variant="outlined" ariaLabel="button" iconRight={true}>
              See all the projects
            </Button>
          </CustomLink>
        </ActionContent>
      </Section>

      <Section>
        <ServiceContainer>
          <ServiceSection list={orderedServiceList} />
        </ServiceContainer>
      </Section>

      <Section>
        <CallToAction title="Something in mind?" buttonTitle="Let´s chat" to="/contact" />
      </Section>
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
