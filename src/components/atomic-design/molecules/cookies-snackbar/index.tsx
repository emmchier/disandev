import React, { FC, useContext, useEffect } from 'react';
import { MainContext } from '../../../../context';
import { gtmVirtualPageView } from '../../../../utils';
import Button from '../../atoms/button';

import Overlay from '../../atoms/overlay';
import Text from '../../atoms/text';
import Snackbar from '../snackbar';

import { Content } from './styles';

interface PropTypes {
  show?: boolean;
  setShow: (b: boolean) => void;
}

const CookiesSnackbar: FC<PropTypes> = ({ show, setShow }) => {
  const { setAllowCookies } = useContext(MainContext);

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
            We use Google Analytics cookies to check visits and provide best user experience. Are
            you agree?{' '}
            <a
              href="https://www.modelosycontratos.com/modelo-aviso-cookies-pagina-web/"
              target="_blank"
            >
              Know more
            </a>
          </Text>
        }
        background="light"
        action={
          <Button onClick={handleAccept} variant="outlined" ariaLabel="accept cookies">
            I Agree
          </Button>
        }
      />
      <Overlay opacity={0.8} isShowing={show} />
    </Content>
  );
};

export default CookiesSnackbar;
