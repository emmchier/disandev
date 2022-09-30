import React, { FC } from 'react';

import { SocialMedia } from '../../../../interfaces';
import { socialMediaList } from '../../../../domain/social-media-list';

import { Icon, CustomLink } from '../../atoms';
import { List, ListItem } from '../../molecules';

import { Content } from './styles';

export const SocialMediaList: FC = () => (
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
