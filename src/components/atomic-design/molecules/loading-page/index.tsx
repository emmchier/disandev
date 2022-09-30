import React, { FC } from 'react';

import {
  Ball,
  CircleLeft,
  CircleRight,
  InnerCircleLeft,
  InnerCircleRight,
  LineLeft,
  LineRight,
  Logo,
  Screen,
} from './styles';

export const LoadingPage: FC = () => (
  <Screen>
    <Logo>
      <CircleLeft>
        <InnerCircleLeft>
          <Ball />
        </InnerCircleLeft>
        <LineLeft />
      </CircleLeft>
      <CircleRight>
        <InnerCircleRight>
          <Ball />
        </InnerCircleRight>
        <LineRight />
      </CircleRight>
    </Logo>
  </Screen>
);
