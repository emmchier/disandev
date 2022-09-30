import React, { FC } from 'react';

import { StepI } from '../../../../interfaces';
import { List } from '../../molecules';
import { StepItem } from './step-item';

import { Content } from './styles';

interface PropTypes {
  list?: StepI[];
}

export const StepsList: FC<PropTypes> = ({ list }) => (
  <Content>
    <List>
      {list?.map((item, index) => (
        <StepItem
          key={item?.fields?.stepTitle}
          item={item}
          isBorder={index === list.length - 1 ? false : true}
        />
      ))}
    </List>
  </Content>
);
