import React, { FC, useEffect, useState } from 'react';

import { CloseIcon } from '../../../ui/svg';
import { Button, Text } from '../../atoms';

import { Content } from './styles';

interface PropTypes {
  message?: string | React.ReactNode;
  action?: React.ReactNode;
  show?: boolean;
  position?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'bottomFull';
  setShow: (e: boolean) => void;
  background?: string;
  showAction?: boolean;
  autoHideEnabled?: boolean; // Nueva prop para habilitar/deshabilitar ocultar automáticamente
}

export const Snackbar: FC<PropTypes> = ({
  message = '',
  show = false,
  position = 'bottomFull',
  background = 'dark',
  showAction = false,
  setShow,
  action = (
    <Button onClick={() => setShow(false)} variant="icon" ariaLabel="close message">
      <CloseIcon ariaLabel="close icon" />
    </Button>
  ),
  autoHideEnabled = false,
}) => {
  useEffect(() => {
    if (show && autoHideEnabled) {
      const timer = setTimeout(() => {
        setShow(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [show, autoHideEnabled]);

  return (
    <Content position={position} show={show} background={background}>
      {message}
      {showAction && action}
    </Content>
  );
};
