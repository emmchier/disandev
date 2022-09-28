import React, { FC } from 'react';

import Button from '../button';
// import CustomLink from '../custom-link';

interface PropTypes {
  onClick?: () => void;
}

const ButtonContact: FC<PropTypes> = ({ onClick }) => (
  <Button variant="outlined" ariaLabel="link to contact page" iconRight={true} onClick={onClick}>
    Let´s chat
  </Button>
  // </CustomLink>
);

export default ButtonContact;
