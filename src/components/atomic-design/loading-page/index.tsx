import React, { FC } from 'react';
import {
  Ball,
  Circle,
  CircleLeft,
  CircleRight,
  InnerCircle,
  InnerCircleLeft,
  InnerCircleRight,
  LineLeft,
  LineRight,
  Logo,
  Screen,
} from './styles';

const LoadingPage: FC = () => (
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

export default LoadingPage;
