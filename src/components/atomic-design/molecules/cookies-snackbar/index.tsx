import React, { FC, useEffect } from 'react';

import { gtmVirtualPageView } from '../../../../utils';

import { Button, Overlay, Text } from '../../atoms';
import { Snackbar } from '../../molecules';

import { Content, CookiesActions } from './styles';

interface PropTypes {
  show?: boolean;
  setShow: (b: boolean) => void;
}

export const CookiesSnackbar: FC<PropTypes> = ({ show, setShow }) => {
  useEffect(() => {
    if (!localStorage.getItem('accepted-cookies')) {
      setShow(true);
    } else {
      gtmVirtualPageView();
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('accepted-cookies', 'accepted');
    gtmVirtualPageView();

    setShow(false);
  };

  return (
    <Content>
      <Snackbar
        show={show}
        setShow={setShow}
        message={
          <Text>
            We use Google Analytics cookies to check visits and provide best user experience. Do you
            agree?
          </Text>
        }
        background="light"
        action={
          <CookiesActions>
            <a
              href="https://policies.google.com/technologies/cookies?hl=es"
              target="_blank"
              style={{ marginRight: '15px' }}
            >
              Know more
            </a>
            <Button onClick={handleAccept} variant="outlined" ariaLabel="accept cookies">
              I Agree
            </Button>
          </CookiesActions>
        }
      />
      <Overlay opacity={0.8} isShowing={show} />
    </Content>
  );
};
