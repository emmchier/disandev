import React, { FC } from 'react';

import { SocialMedia } from '../../../../interfaces';
import Icon from '../../atoms/icon';
import List from '../../molecules/list';
import ListItem from '../../molecules/list/item-list';
import { Content } from './styles';
import { socialMediaList } from '../../../../domain/social-media-list';
import CustomLink from '../../atoms/custom-link';

const SocialMediaList: FC = () => (
  <Content>
    <List orientation="horizontal" alignItems="end">
      {socialMediaList?.map((item: SocialMedia) => (
        <ListItem key={item.socialName}>
          <CustomLink to={item.to} target="_blank">
            <Icon ariaLabel={item.socialName} icon={item.icon} hover={true} />
          </CustomLink>
        </ListItem>
      ))}
    </List>
  </Content>
);

export default SocialMediaList;
