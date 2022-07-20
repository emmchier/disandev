import type { NextPage, GetStaticProps } from 'next';
import { usePageMetadata } from '../hooks/usePageMetadata';
import Heading from '../components/atomic-design/atoms/heading';
import Text from '../components/atomic-design/atoms/text';
import { MemberI, PageInterface } from '../interfaces';
import Page from '../components/atomic-design/atoms/page';
import Section from '../components/atomic-design/atoms/section';
import { client } from '../common/contentfulClientProvider';
import Container from '../components/atomic-design/atoms/container';
import Image from 'next/image';

interface Props {
  pages: PageInterface[];
  members: MemberI[];
}

const TeamPage: NextPage<Props> = ({ pages, members }) => {
  const { title, description, keywords } = usePageMetadata(pages, 'the-team');

  return (
    <Page title={title} description={description} keywords={keywords}>
      <Container>
        <Section>
          <Heading variant="h2" weight="regular">
            {title}
          </Heading>
          <ul>
            {members?.map((member: MemberI) => (
              <li key={member.fields.memberName}>
                <Image
                  src={`https:${member.fields.memberImage.fields.file.url}`}
                  height={200}
                  width={200}
                  alt={member.fields.memberName}
                  priority
                />
                <Heading variant="h4">{member.fields.memberName}</Heading>
              </li>
            ))}
          </ul>
        </Section>
      </Container>
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
