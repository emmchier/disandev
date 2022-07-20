import type { NextPage, GetStaticProps } from 'next';
import { usePageMetadata } from '../hooks/usePageMetadata';
import Heading from '../components/atomic-design/atoms/heading';
import Text from '../components/atomic-design/atoms/text';
import { PageInterface, ServiceI, StepI, TechI } from '../interfaces';
import Page from '../components/atomic-design/atoms/page';
import Section from '../components/atomic-design/atoms/section';
import { client } from '../common/contentfulClientProvider';
import Container from '../components/atomic-design/atoms/container';
import Image from 'next/image';

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
      <Container>
        <Section>
          <Heading variant="h2" weight="regular">
            {title}
          </Heading>
          <ul>
            {services?.map((service) => (
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
          <ul>
            {steps?.map((step: StepI) => (
              <li key={step.fields.stepTitle}>
                <Heading variant="h4">{step.fields.stepTitle}</Heading>
                <Text>{step.fields.stepDesc}</Text>
              </li>
            ))}
          </ul>
          <ul>
            {techs?.map((tech: TechI) => (
              <li key={tech.fields.technologyName}>
                <Heading variant="h4">{tech.fields.technologyName}</Heading>
              </li>
            ))}
          </ul>
        </Section>
      </Container>
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
