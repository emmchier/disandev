import React, { FC } from 'react';

import Heading from '../../atoms/heading';
import Selected from '../../atoms/selected';

import { Content, InnerContent } from './styles';
import CustomLink from '../../atoms/custom-link/index';

type Props = {
  title?: string;
  buttonTitle?: string;
  to?: string;
};

const CallToAction: FC<Props> = ({ title, buttonTitle, to = '' }) => (
  <Content>
    <InnerContent>
      <Heading variant="h3" weight="light">
        {title}
      </Heading>
      <CustomLink to={to}>
        <Heading variant="h4" weight="bold">
          <Selected>{buttonTitle}</Selected>
        </Heading>
      </CustomLink>
    </InnerContent>
  </Content>
);

export default CallToAction;
