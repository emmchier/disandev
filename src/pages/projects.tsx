import type { NextPage, GetStaticProps } from 'next';

import { usePageMetadata } from '../hooks/usePageMetadata';
import { client } from '../common/contentfulClientProvider';
import { PageInterface, ProjectI } from '../interfaces';

import { Page, Section, PageHeader, Icon } from '../components/atomic-design/atoms';
import { CallToAction } from '../components/atomic-design/molecules';
import { ProjectList } from '../components/atomic-design/organisms';

import { PageHeaderContainer, ProjectsContent } from '../styles/pages/projects-styles';

interface Props {
  pages: PageInterface[];
  projects: ProjectI[];
}

const ProjectsPage: NextPage<Props> = ({ pages, projects }) => {
  const { title, description, keywords } = usePageMetadata(pages, 'projects');
  const orderedProjectList = projects.sort((a, b) => a.fields.order - b.fields.order);

  return (
    <Page title={title} description={description} keywords={keywords}>
      <Section>
        <PageHeaderContainer>
          <PageHeader>
            <span>What we have been</span>
            <span>
              <div>working on</div>
              <b>.</b>
            </span>
          </PageHeader>
          <Icon icon="teamShape" ariaLabel="geometric shape" />
        </PageHeaderContainer>
      </Section>

      <ProjectsContent>
        <Section>
          <ProjectList list={orderedProjectList} />
        </Section>
      </ProjectsContent>

      <Section>
        <CallToAction title="Something in mind?" buttonTitle="Let´s chat" to="/contact" />
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
