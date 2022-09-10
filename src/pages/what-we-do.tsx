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
  const { title, description, keywords, tag } = usePageMetadata(pages, 'what-we-do');

  const filterTechs = techs?.filter((tech) => tech?.fields?.showLogo === true);
  const orderServiceList = services.sort((a, b) => a.fields.order - b.fields.order);
  const orderedTechList = filterTechs.sort((a, b) => a.fields.order - b.fields.order);
  const orderedStepList = steps.sort((a, b) => a.fields.order - b.fields.order);

  return (
    <Page title={title} description={description} keywords={keywords} tag={tag}>
      <Section>
        <PageHeaderContainer>
          <PageHeader>
            <span>Do you want to provide a great</span>
            <span>
              <div>experience</div> to your users?
            </span>
            <span>
              You are in the right place<b>.</b>
            </span>
          </PageHeader>
          <Icon icon="teamShape" ariaLabel="geometric shape" />
        </PageHeaderContainer>
      </Section>

      <ServicesContent>
        <Section>
          <ServiceSection list={orderServiceList} offsetColumn={true} />
        </Section>
      </ServicesContent>

      <WhatWeDoContent>
        <Section>
          <SectionHeader>
            How do we work<b>.</b>
          </SectionHeader>
          <StepsList list={orderedStepList} />
        </Section>
      </WhatWeDoContent>

      <TechsContent>
        <Section>
          <SectionHeader>
            Technologies we work with<b>.</b>
          </SectionHeader>
          <TechList list={orderedTechList} />
        </Section>
      </TechsContent>

      <Section>
        <CallToAction title="Something in mind?" buttonTitle="Let´s chat" isLink={false} />
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
