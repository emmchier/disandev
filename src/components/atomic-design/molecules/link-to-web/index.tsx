import React, { FC } from 'react';

import Icon from '../../atoms/icon';
import Text from '../../atoms/text';

import { Content } from './styles';

interface PropTypes {
  url?: string;
  urlName?: string;
}

const LinkToWeb: FC<PropTypes> = ({ url, urlName }) => (
  <Content>
    <Text weight="light">¿Querés ver como quedó?</Text>
    <a href={url} target="_blank" rel="noopener noreferrer">
      {urlName}
      <Icon icon="arrow" ariaLabel="arrow icon to open link" variant="primary" direction="right" />
    </a>
  </Content>
);

export default LinkToWeb;
