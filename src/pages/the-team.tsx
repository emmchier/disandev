import type { NextPage, GetStaticProps } from 'next';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { MemberI, PageInterface } from '../interfaces';
import { client } from '../common/contentfulClientProvider';

import Page from '../components/atomic-design/atoms/page';
import Section from '../components/atomic-design/atoms/section';
import Image from 'next/image';
import {
  MembersContent,
  OurValuesContent,
  OurValuesImage,
  PageHeaderContainer,
} from '../styles/pages/the-team-styles';
import PageHeader from '../components/atomic-design/atoms/page-header';
import Icon from '../components/atomic-design/atoms/icon';
import SectionHeader from '../components/atomic-design/atoms/section-header';
import Row from '../components/atomic-design/molecules/grid/row';
import Col from '../components/atomic-design/molecules/grid/col';
import Text from '../components/atomic-design/atoms/text';
import CallToAction from '../components/atomic-design/molecules/call-to-action';
import OurValuesImg from '../../public/images/icons/our-values.png';
import TeamList from '../components/atomic-design/organisms/team-list';

interface Props {
  pages: PageInterface[];
  members: MemberI[];
}

const TeamPage: NextPage<Props> = ({ pages, members }) => {
  const { title, description, keywords } = usePageMetadata(pages, 'the-team');

  return (
    <Page title={title} description={description} keywords={keywords}>
      <Section>
        <PageHeaderContainer>
          <PageHeader>
            Behind every digital product
            <span>
              there is a
              <div>
                great human team <b>.</b>
              </div>
            </span>
          </PageHeader>
          <Icon icon="teamShape" ariaLabel="geometric shape" />
        </PageHeaderContainer>
      </Section>

      <MembersContent>
        <Section>
          <TeamList list={members} />
        </Section>
      </MembersContent>

      <OurValuesContent>
        <Section>
          <SectionHeader>
            Our Values<b>.</b>
          </SectionHeader>
          <Row>
            <Col xs={12} sm={5} md={5} lg={5} xlg={5}>
              <OurValuesImage>
                <Image
                  src={OurValuesImg}
                  alt="Our values image reference"
                  layout="responsive"
                  objectFit="contain"
                  width="0"
                  height="0"
                />
              </OurValuesImage>
            </Col>
            <Col xs={12} sm={7} md={7} lg={7} xlg={7}>
              <Text>
                We know that each client has specific needs. That's why we are flexible and we
                create solutions based on a personalized design adapted to the circumstances of each
                project.
              </Text>
              <Text>
                We firmly believe that there is no problem without a solution. where some people see
                barriers, those of us who work at Cromac see possibilities. We explore the different
                alternatives that allow us to discover multiple solutions and We select the most
                optimal.
              </Text>
            </Col>
          </Row>
        </Section>
      </OurValuesContent>

      <Section>
        <CallToAction
          to="/projects"
          title="Do you want to know what we do?"
          buttonTitle="Look all projects"
        />
      </Section>
    </Page>
  );
};

export default TeamPage;

export const getStaticProps: GetStaticProps = async () => {
  const res = await client.getEntries({ content_type: 'pages' });
  const members = await client.getEntries({ content_type: 'members' });

  return {
    props: {
      pages: res.items,
      members: members.items,
    },
  };
};
