import React, { FC } from 'react';

import { Heading, Selected, CustomLink } from '../../atoms';

import { Content, InnerContent } from './styles';

type Props = {
  title?: string | React.ReactNode;
  buttonTitle?: string;
  to?: string;
  isLink?: boolean;
};

export const CallToAction: FC<Props> = ({ title, buttonTitle, to = '', isLink = true }) => (
  <Content>
    <InnerContent>
      <Heading variant="h3" weight="light">
        {title}
      </Heading>
      {isLink === true ? (
        <CustomLink to={to}>
          <Heading variant="h4" weight="bold">
            <Selected>{buttonTitle}</Selected>
          </Heading>
        </CustomLink>
      ) : (
        <a href="mailto:somos.disandev@gmail.com">
          <Heading variant="h4" weight="bold">
            <Selected>{buttonTitle}</Selected>
          </Heading>
        </a>
      )}
    </InnerContent>
  </Content>
);
