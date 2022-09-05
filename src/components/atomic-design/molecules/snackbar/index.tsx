import React, { FC } from 'react';

import { CloseIcon } from '../../../ui/svg';
import Button from '../../atoms/button';
import Container from '../../atoms/container';
import Text from '../../atoms/text';
import { Content } from './styles';

interface PropTypes {
  message?: string | React.ReactNode;
  action?: React.ReactNode;
  show?: boolean;
  position?: string;
  setShow: (e: boolean) => void;
  background?: string;
}

const Snackbar: FC<PropTypes> = ({
  message = '',
  show = false,
  position = 'bottomFull',
  background = 'dark',
  setShow,
  action = (
    <Button onClick={() => setShow(false)} variant="icon" ariaLabel="close message">
      <CloseIcon ariaLabel="close icon" />
    </Button>
  ),
}) => (
  <Content position={position} show={show} background={background}>
    {message}
    {action}
  </Content>
);

export default Snackbar;
