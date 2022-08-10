import React, { FC } from 'react';

import { CloseIcon } from '../../../ui/svg';
import Button from '../../atoms/button';
import Text from '../../atoms/text';
import { Content } from './styles';

interface PropTypes {
  message: string | React.ReactNode;
  show?: boolean;
  position?: string;
  setShow: (e: boolean) => void;
}

const Snackbar: FC<PropTypes> = ({
  message = '',
  show = false,
  position = 'bottomFull',
  setShow,
}) => {
  return (
    <Content position={position} show={show}>
      <Text>{message}</Text>
      <Button onClick={() => setShow(false)} variant="icon" ariaLabel="close message">
        <CloseIcon ariaLabel="close icon" />
      </Button>
    </Content>
  );
};

export default Snackbar;
