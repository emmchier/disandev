import React, { FC } from 'react';
import { Balls, Screen } from './styles';

const LoadingPage: FC = () => (
  <Screen>
    <Balls>
      <div className="ball one"></div>
      <div className="ball two"></div>
      <div className="ball three"></div>
    </Balls>
  </Screen>
);

export default LoadingPage;
