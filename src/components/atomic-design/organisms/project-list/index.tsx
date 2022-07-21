import React, { FC } from 'react';

import { ProjectI } from '../../../../interfaces';
import CustomLink from '../../atoms/custom-link';
import Card from '../../molecules/card';
import Col from '../../molecules/grid/col';
import Row from '../../molecules/grid/row';

interface Props {
  list: ProjectI[];
}

const ProjectList: FC<Props> = ({ list }) => {
  return (
    <Row gap={10}>
      {list?.map((item: ProjectI) => (
        <Col xs={12} sm={4} md={6} lg={6} xlg={6}>
          <CustomLink to={`/project/${item?.fields?.slug}`} key={item?.fields?.slug}>
            <Card
              img={item?.fields?.cover?.fields?.file?.url}
              title={item?.fields?.name}
              year={item?.fields?.year}
              type={item?.fields?.type}
              alt={item?.fields?.name}
              isHover={true}
              wrapperHeight="100%"
              wrapperWidth="100%"
              imgHeight="100%"
              imgWidth="100%"
            />
          </CustomLink>
        </Col>
      ))}
    </Row>
  );
};

export default ProjectList;
