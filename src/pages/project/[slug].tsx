import { useEffect, useState } from 'react';
import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import Image from 'next/image';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useRouter } from 'next/router';
import { client } from '../../common/contentfulClientProvider';
import { usePageMetadata } from '../../hooks/usePageMetadata';
import { PageInterface, ProjectI, TechI } from '../../interfaces';

import BackButton from '../../components/atomic-design/atoms/back-button';
import Chip from '../../components/atomic-design/atoms/chip';
import Container from '../../components/atomic-design/atoms/container';
import Heading from '../../components/atomic-design/atoms/heading';
import Hero from '../../components/atomic-design/atoms/hero';
import Page from '../../components/atomic-design/atoms/page';
import Section from '../../components/atomic-design/atoms/section';
import Col from '../../components/atomic-design/molecules/grid/col';
import Row from '../../components/atomic-design/molecules/grid/row';
import LinkToWeb from '../../components/atomic-design/molecules/link-to-web';
import List from '../../components/atomic-design/molecules/list';
import useIsMobile from '../../hooks/useIsMobile';

import {
  ActionContent,
  DescriptionLeft,
  DescriptionRight,
  MainInfoContent,
  PaddingContent,
  Technologies,
  DevicesContainer,
} from '../../styles/pages/project-detail-styles';

interface Props {
  pages: PageInterface[];
  project: ProjectI;
}

const ProjectDetail: NextPage<Props> = ({ pages, project }) => {
  const { title, description, keywords } = usePageMetadata(pages, project?.fields?.slug);
  const router = useRouter();
  const isMobile = useIsMobile();

  console.log(project);

  return (
    <Page title={`Projects | ${title}`} description={description} keywords={keywords}>
      {isMobile ? (
        <Image
          alt={`${project?.fields?.name} image header responsive`}
          src={
            project?.fields?.headerRes?.fields?.file?.url
              ? `https:${project?.fields?.headerRes?.fields?.file?.url}`
              : '/images/default-bg.svg'
          }
          height="100%"
          width="80%"
          layout="responsive"
          objectFit="cover"
        />
      ) : (
        <Hero
          img={`${project?.fields?.header?.fields?.file?.url}`}
          alt={`${project?.fields?.name} image header desk`}
        />
      )}
      <Section>
        <ActionContent>
          <BackButton navigate={() => router.back()} />
        </ActionContent>
        <MainInfoContent>
          <Row>
            <Col xs={12} sm={6} md={7} lg={7} xlg={7}>
              <Heading variant="h2" weight="regular" cap="upper">
                {project?.fields?.name}
              </Heading>
              <Heading variant="h5" weight="regular">
                {project?.fields?.subtitle}
              </Heading>
            </Col>
            <Col xs={12} sm={6} md={5} lg={5} xlg={5}>
              <Technologies>
                <List orientation="horizontal">
                  {project?.fields?.techList
                    ? project?.fields?.techList.map((tag: TechI, index: number) => (
                        <li key={index}>
                          <Chip>{tag?.fields?.technologyName}</Chip>
                        </li>
                      ))
                    : []}
                </List>
              </Technologies>
            </Col>
          </Row>
        </MainInfoContent>
      </Section>

      <Container>
        <DevicesContainer>
          <Image
            alt={`${project?.fields?.name} multidevise picture`}
            src={
              project?.fields?.banner?.fields?.file?.url
                ? `https:${project?.fields?.banner?.fields?.file?.url}`
                : '/images/default-bg.svg'
            }
            height="50%"
            width="100%"
            layout="responsive"
            objectFit="contain"
          />
        </DevicesContainer>
      </Container>

      <Section>
        <PaddingContent>
          <Row>
            <Col xs={12} sm={7} md={5} lg={5} xlg={5}>
              <DescriptionLeft>
                <Heading variant="h3" weight="medium">
                  What was the project about?
                </Heading>
                <span>
                  <LinkToWeb url={project?.fields?.url} urlName={project?.fields?.urlName} />
                </span>
              </DescriptionLeft>
            </Col>
            <Col xs={12} sm={7} md={7} lg={7} xlg={7}>
              <DescriptionRight>
                {documentToReactComponents(project?.fields?.description)}
                <span>
                  <LinkToWeb url={project?.fields?.url} urlName={project?.fields?.urlName} />
                </span>
              </DescriptionRight>
            </Col>
          </Row>
        </PaddingContent>
      </Section>

      <PaddingContent>
        <Hero
          img={`${project?.fields?.hero?.fields?.file?.url}`}
          alt={`${project?.fields?.name} hero image project`}
        />
      </PaddingContent>
    </Page>
  );
};

export default ProjectDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = await client.getEntries({
    content_type: 'proyectos',
  });

  const paths = projects?.items.map((item: ProjectI) => {
    return {
      params: { slug: item?.fields?.slug },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: 'proyectos',
    'fields.slug': params?.slug,
  });
  const res = await client.getEntries({
    content_type: 'pages',
  });

  if (!items.length) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      pages: res.items,
      project: items[0],
      revalidate: 1,
    },
  };
};
