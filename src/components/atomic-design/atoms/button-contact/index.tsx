import React, { FC } from 'react';

import Button from '../button';
// import CustomLink from '../custom-link';

interface PropTypes {
  onClick?: () => void;
}

const ButtonContact: FC<PropTypes> = ({ onClick }) => (
  // <CustomLink to="/lets-talk">
  <a href={`mailto:somos.disandev@gmail.com`}>
    <Button variant="outlined" ariaLabel="link to contact page" iconRight={true} onClick={onClick}>
      Let´s chat
    </Button>
  </a>
  // </CustomLink>
);

export default ButtonContact;
