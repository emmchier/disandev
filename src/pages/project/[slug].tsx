import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { client } from '../../common/contentfulClientProvider';
import { usePageMetadata } from '../../hooks/usePageMetadata';
import { PageInterface, ProjectI, TechI } from '../../interfaces';
import useIsMobile from '../../hooks/useIsMobile';

import {
  BackButton,
  Chip,
  Heading,
  Hero,
  Page,
  Section,
  SkelletonHeader,
  SkelletonDevices,
  SkelletonHero,
  Text,
} from '../../components/atomic-design/atoms';

import { Row, Col, LinkToWeb, List } from '../../components/atomic-design/molecules';

import {
  ActionContent,
  DescriptionLeft,
  DescriptionRight,
  MainInfoContent,
  PaddingContent,
  Technologies,
  DevicesContainer,
  BannerContainer,
} from '../../styles/pages/project-detail-styles';

interface Props {
  pages: PageInterface[];
  project: ProjectI;
}

const ProjectDetail: NextPage<Props> = ({ pages, project }) => {
  const { title, description, keywords } = usePageMetadata(pages, project?.fields?.slug);
  const router = useRouter();
  const isMobile = useIsMobile();

  return (
    <Page title={`Projects | ${title}`} description={description} keywords={keywords}>
      <BannerContainer>
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
            priority
          />
        ) : (
          <Hero
            img={`${project?.fields?.header?.fields?.file?.url}`}
            alt={`${project?.fields?.name} image header desk`}
          />
        )}
        <SkelletonHeader />
      </BannerContainer>
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
                    ? project?.fields?.techList.map((tech: TechI, index: number) => (
                        <li key={index}>
                          <Chip>{tech?.fields?.technologyName}</Chip>
                        </li>
                      ))
                    : []}
                </List>
              </Technologies>
            </Col>
          </Row>
        </MainInfoContent>
      </Section>

      <BannerContainer>
        <DevicesContainer>
          <Image
            alt={`${project?.fields?.name} multidevise picture`}
            src={
              project?.fields?.banner?.fields?.file?.url
                ? `https:${project?.fields?.banner?.fields?.file?.url}`
                : '/images/default-bg.svg'
            }
            height="50%"
            width="80%"
            layout="responsive"
            objectFit="contain"
            priority
          />
        </DevicesContainer>
        <SkelletonDevices />
      </BannerContainer>

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
            <Col xs={12} sm={12} md={7} lg={7} xlg={7}>
              <DescriptionRight>
                <Text>{documentToReactComponents(project?.fields?.description)}</Text>
                <span>
                  <LinkToWeb url={project?.fields?.url} urlName={project?.fields?.urlName} />
                </span>
              </DescriptionRight>
            </Col>
          </Row>
        </PaddingContent>
      </Section>

      <BannerContainer>
        <PaddingContent>
          <Image
            src={
              project?.fields?.hero?.fields?.file?.url
                ? `https:${project?.fields?.hero?.fields?.file?.url}`
                : '/images/default-bg.svg'
            }
            alt={`${project?.fields?.name} hero image project`}
            height="50%"
            width="80%"
            layout="responsive"
            objectFit="contain"
            priority
          />
        </PaddingContent>
        <SkelletonHero />
      </BannerContainer>
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
