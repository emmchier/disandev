import type { NextPage, GetStaticProps } from 'next';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { PageInterface, ServiceI, StepI, TechI } from '../interfaces';
import { client } from '../common/contentfulClientProvider';

import Page from '../components/atomic-design/atoms/page';
import Section from '../components/atomic-design/atoms/section';
import PageHeader from '../components/atomic-design/atoms/page-header';
import Icon from '../components/atomic-design/atoms/icon';
import ServiceSection from '../components/atomic-design/organisms/service-section';
import SectionHeader from '../components/atomic-design/atoms/section-header';
import StepsList from '../components/atomic-design/organisms/steps-list';
import TechList from '../components/atomic-design/organisms/tech-list';
import CallToAction from '../components/atomic-design/molecules/call-to-action';

import {
  PageHeaderContainer,
  ServicesContent,
  TechsContent,
  WhatWeDoContent,
} from '../styles/pages/what-we-do-styles';

interface Props {
  pages: PageInterface[];
  services: ServiceI[];
  steps: StepI[];
  techs: TechI[];
}

const WhatWeDoPage: NextPage<Props> = ({ pages, services, steps, techs }) => {
  const { title, description, keywords } = usePageMetadata(pages, 'what-we-do');

  return (
    <Page title={title} description={description} keywords={keywords}>
      <Section>
        <PageHeaderContainer>
          <PageHeader>
            ¿Querés brindarle una buena
            <span>
              <b>experiencia</b> a tus usuarios?
            </span>
            Estás en el lugar indicado
          </PageHeader>
          <Icon icon="teamShape" ariaLabel="geometric shape" />
        </PageHeaderContainer>
      </Section>

      <ServicesContent>
        <Section>
          <ServiceSection list={services} offsetColumn={true} />
        </Section>
      </ServicesContent>

      <WhatWeDoContent>
        <Section>
          <SectionHeader>How we work</SectionHeader>
          <StepsList list={steps} />
        </Section>
      </WhatWeDoContent>

      <TechsContent>
        <Section>
          <SectionHeader>Our main technologies</SectionHeader>
          <TechList list={techs} />
        </Section>
      </TechsContent>

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

export default WhatWeDoPage;

export const getStaticProps: GetStaticProps = async () => {
  const res = await client.getEntries({ content_type: 'pages' });
  const services = await client.getEntries({ content_type: 'services' });
  const steps = await client.getEntries({ content_type: 'workSteps' });
  const techs = await client.getEntries({ content_type: 'technologies' });

  return {
    props: {
      pages: res.items,
      services: services.items,
      steps: steps.items,
      techs: techs.items,
    },
  };
};
