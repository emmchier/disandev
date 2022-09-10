import type { NextPage, GetStaticProps } from 'next';

import { usePageMetadata } from '../hooks/usePageMetadata';
import Heading from '../components/atomic-design/atoms/heading';
import { PageInterface, ProjectI, ServiceI } from '../interfaces';
import Page from '../components/atomic-design/atoms/page';
import Section from '../components/atomic-design/atoms/section';
import { client } from '../common/contentfulClientProvider';
import Container from '../components/atomic-design/atoms/container';
import { getItemsByPage } from '../helpers/functions';
import CustomLink from '../components/atomic-design/atoms/custom-link';
import SectionHeader from '../components/atomic-design/atoms/section-header';
import Button from '../components/atomic-design/atoms/button';
import Icon from '../components/atomic-design/atoms/icon';
import Core from '../components/atomic-design/molecules/core-component';
import ProjectList from '../components/atomic-design/organisms/project-list';
import Box from '../components/atomic-design/atoms/box';
import ServiceSection from '../components/atomic-design/organisms/service-section';
import CallToAction from '../components/atomic-design/molecules/call-to-action';

import {
  ActionContent,
  Content,
  HomeContent,
  ProjectSectionContent,
  TextContent,
  ServiceContainer,
} from '../styles/pages/home-styles';

interface Props {
  pages: PageInterface[];
  projects: ProjectI[];
  services: ServiceI[];
}

const HomePage: NextPage<Props> = ({ pages, projects, services }) => {
  const { title, description, keywords, tag } = usePageMetadata(pages, 'home');
  const filteredProjectList = getItemsByPage(projects, 'home');
  const filteredServicesList = getItemsByPage(services, 'home');
  const orderServiceList = filteredServicesList.sort((a, b) => a.fields.order - b.fields.order);

  const handleAnchor = () => {
    window.scrollTo({ top: 680, behavior: 'smooth' });
  };

  return (
    <Page title={title} description={description} keywords={keywords} tag={tag}>
      <Section auto={false} container="none">
        <Container>
          <Content>
            <HomeContent>
              <TextContent>
                <SectionHeader variant="h1">
                  <span>We create digital solutions</span>
                  <span>for your products</span>
                  to make an impression
                  <b>.</b>
                </SectionHeader>
                <Button onClick={handleAnchor} variant="text" ariaLabel="ancla a section 2">
                  <Heading variant="h4" weight="bold">
                    Know Us
                  </Heading>
                  <Icon ariaLabel="arrow to bottom" icon="arrow" direction="down" />
                </Button>
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
          <ProjectList list={filteredProjectList} />
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
          <ServiceSection list={orderServiceList} />
          <Box width="100%" display="flex" justifyContent="center">
            <CustomLink to="/what-we-do">
              <Button variant="outlined" ariaLabel="button" iconRight={true}>
                See more services
              </Button>
            </CustomLink>
          </Box>
        </ServiceContainer>
      </Section>

      <Section>
        <CallToAction title="Something in mind?" buttonTitle="Let´s chat" isLink={false} />
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
