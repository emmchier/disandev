import React, { FC } from 'react';

import { Icon, Text } from '../../atoms';

import { Content } from './styles';

interface PropTypes {
  url?: string;
  urlName?: string;
}

export const LinkToWeb: FC<PropTypes> = ({ url, urlName }) => (
  <Content>
    <Text weight="light">Want to chek it out?</Text>
    <a href={url} target="_blank" rel="noopener noreferrer">
      {urlName}
      <Icon icon="arrow" ariaLabel="arrow icon to open link" variant="primary" direction="right" />
    </a>
  </Content>
);
