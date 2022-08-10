import type { NextPage, GetStaticProps } from 'next';
import { usePageMetadata } from '../hooks/usePageMetadata';
import Heading from '../components/atomic-design/atoms/heading';
import { PageInterface, ProjectI, ServiceI } from '../interfaces';
import Page from '../components/atomic-design/atoms/page';
import Section from '../components/atomic-design/atoms/section';
import { client } from '../common/contentfulClientProvider';
import Container from '../components/atomic-design/atoms/container';
import Image from 'next/image';
import { getItemsByPage } from '../helpers/functions';
import Text from '../components/atomic-design/atoms/text';
import CustomLink from '../components/atomic-design/atoms/custom-link';
import {
  ActionContent,
  Content,
  HomeContent,
  ProjectSectionContent,
  TextContent,
} from '../styles/pages/home-styles';
import SectionHeader from '../components/atomic-design/atoms/section-header';
import Button from '../components/atomic-design/atoms/button';
import Icon from '../components/atomic-design/atoms/icon';
import Core from '../components/atomic-design/molecules/core-component';
import { theme } from '../styles/theme';
import ProjectList from '../components/atomic-design/organisms/project-list';
import Box from '../components/atomic-design/atoms/box';
import ServiceSection from '../components/atomic-design/organisms/service-section';
import CallToAction from '../components/atomic-design/molecules/call-to-action';

interface Props {
  pages: PageInterface[];
  projects: ProjectI[];
  services: ServiceI[];
}

const HomePage: NextPage<Props> = ({ pages, projects, services }) => {
  const { title, description, keywords } = usePageMetadata(pages, 'home');
  const filteredProjectList = getItemsByPage(projects, 'home');
  const filteredServicesList = getItemsByPage(services, 'home');

  const handleAnchor = () => {
    window.scrollTo({ top: 1300, behavior: 'smooth' });
  };

  return (
    <Page title={title} description={description} keywords={keywords}>
      <Section auto={false} container="fluid">
        <Container>
          <Content>
            <HomeContent>
              <TextContent>
                <SectionHeader variant="h1">
                  <span>Creamos soluciones</span>
                  digitales que dejan marca
                </SectionHeader>
                <Button onClick={handleAnchor} variant="text" ariaLabel="ancla a section 2">
                  <Heading variant="h4" weight="bold">
                    Conocenos
                  </Heading>
                  <Icon ariaLabel="arrow to bottom" icon="arrow" direction="down" />
                </Button>
              </TextContent>
            </HomeContent>
          </Content>
        </Container>
        <Core />
      </Section>

      <Section padding={`${theme.spacing(25)} 0 ${theme.spacing(10)} 0`}>
        <ProjectSectionContent>
          <SectionHeader>
            <span>What have we been</span>
            working on
          </SectionHeader>
          <ProjectList list={filteredProjectList} />
        </ProjectSectionContent>
        <ActionContent>
          <CustomLink to="/projects">
            <Button variant="outlined" ariaLabel="button" iconRight={true}>
              See all projects
            </Button>
          </CustomLink>
        </ActionContent>
      </Section>

      <Section>
        <ServiceSection list={filteredServicesList} />
        <Box width="100%" display="flex" justifyContent="center">
          <CustomLink to="/what-we-do">
            <Button variant="outlined" ariaLabel="button" iconRight={true}>
              See all services
            </Button>
          </CustomLink>
        </Box>
      </Section>

      <Section>
        <CallToAction
          to="/lets-talk"
          title="¿Have an idea?"
          buttonTitle="Lets talk"
          isLink={false}
        />
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
