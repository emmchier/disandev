import React, { FC, useEffect } from 'react';

import { Content } from './styles';

type Props = {
  isShowing?: boolean;
  opacity?: number;
  onClick?: () => void;
};

export const Overlay: FC<Props> = ({ isShowing = false, opacity = 0.5, onClick }) => {
  const disableScroll = () => (document.body.style.overflow = 'hidden');

  const enableScroll = () => (document.body.style.overflow = '');

  useEffect(() => {
    isShowing === true
      ? window.addEventListener('scroll', disableScroll)
      : window.addEventListener('scroll', enableScroll);
  }, [isShowing]);

  return (
    <Content isShowing={isShowing} onClick={onClick} opacity={opacity}>
      <span></span>
    </Content>
  );
};
