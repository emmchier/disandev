import type { NextPage, GetStaticProps } from 'next';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { client } from '../common/contentfulClientProvider';
import { PageInterface, ProjectI } from '../interfaces';

import Page from '../components/atomic-design/atoms/page';
import Section from '../components/atomic-design/atoms/section';
import PageHeader from '../components/atomic-design/atoms/page-header';
import ProjectList from '../components/atomic-design/organisms/project-list';

import { PageHeaderContainer, ProjectsContent } from '../styles/pages/projects-styles';
import CallToAction from '../components/atomic-design/molecules/call-to-action';
import Icon from '../components/atomic-design/atoms/icon';

interface Props {
  pages: PageInterface[];
  projects: ProjectI[];
}

const ProjectsPage: NextPage<Props> = ({ pages, projects }) => {
  const { title, description, keywords } = usePageMetadata(pages, 'projects');

  return (
    <Page title={title} description={description} keywords={keywords}>
      <Section>
        <PageHeaderContainer>
          <PageHeader>
            <span>
              Look at what <div>projects</div>
            </span>
            we were working
            <b>.</b>
          </PageHeader>
          <Icon icon="teamShape" ariaLabel="geometric shape" />
        </PageHeaderContainer>
      </Section>

      <ProjectsContent>
        <Section>
          <ProjectList list={projects} />
        </Section>
      </ProjectsContent>

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
