import React, { FC } from 'react';

import { Content } from './styles';

type Props = {
  isShowing?: boolean;
  onClick?: () => void;
};

const Overlay: FC<Props> = ({ isShowing = false, onClick }) => (
  <Content isShowing={isShowing} onClick={onClick}>
    <span></span>
  </Content>
);

export default Overlay;
