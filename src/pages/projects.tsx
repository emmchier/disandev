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
  const { title, description, keywords, tag } = usePageMetadata(pages, 'projects');
  const orderedProjectList = projects.sort((a, b) => a.fields.order - b.fields.order);

  return (
    <Page title={title} description={description} keywords={keywords} tag={tag}>
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
        <CallToAction title="Something in mind?" buttonTitle="Let´s chat" isLink={false} />
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
