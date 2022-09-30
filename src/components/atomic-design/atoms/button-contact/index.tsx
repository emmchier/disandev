import React, { FC } from 'react';
import { Button } from '../button';

interface PropTypes {
  onClick?: () => void;
}

export const ButtonContact: FC<PropTypes> = ({ onClick }) => (
  <Button variant="outlined" ariaLabel="link to contact page" iconRight={true} onClick={onClick}>
    Let´s chat
  </Button>
);
