import React, { FC } from 'react';

import { MemberI } from '../../../../interfaces';
import CustomLink from '../../atoms/custom-link';
import Icon from '../../atoms/icon';
import Card from '../../molecules/card';
import Col from '../../molecules/grid/col';
import Row from '../../molecules/grid/row';

import { MemberRole, SocialMember } from './styles';

interface Props {
  list: MemberI[];
}

const TeamList: FC<Props> = ({ list }) => (
  <Row gap={10}>
    {list?.map((item) => (
      <Col key={item?.fields?.slug} xs={12} sm={4} md={4} lg={4} xlg={4}>
        <Card
          img={
            item?.fields?.memberImage?.fields?.file?.url
              ? `https:${item?.fields?.memberImage?.fields?.file?.url}`
              : '/images/default-img.svg'
          }
          title={item?.fields?.memberName}
          alt={item?.fields?.memberName}
          wrapperHeight="100%"
          wrapperWidth="100%"
          imgHeight="100%"
          imgWidth="100%"
          sparks={false}
        />
        <MemberRole>{item?.fields?.memberRole}</MemberRole>
        <CustomLink to={`${item?.fields?.memberLinkedin}`} target="_blank">
          <SocialMember>
            <Icon ariaLabel="link to LinkedIn" icon="linkedin" hover={true} />
          </SocialMember>
        </CustomLink>
      </Col>
    ))}
  </Row>
);

export default TeamList;
