import { FC, useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import ScrollToTop from '../atomic-design/atoms/scroll-to-top';
import Footer from '../atomic-design/molecules/footer';
import Navbar from '../atomic-design/molecules/navbar';
import Sidenav from '../atomic-design/molecules/sidenav';

import { Main } from './styles';
import CookiesSnackbar from '../atomic-design/molecules/cookies-snackbar';
import Snackbar from '../atomic-design/molecules/snackbar';
import Button from '../atomic-design/atoms/button';
import { CloseIcon } from '../ui/svg';

interface Proptypes {
  children: React.ReactNode;
  path?: string;
}

const Layout: FC<Proptypes> = ({ children }) => {
  const { pathname } = useRouter();
  const [show, setShow] = useState(false);
  const showSidebar = (): void => setShow(!show);
  const [showCookiesMessage, setShowCookiesMessage] = useState(false);

  return (
    <Main>
      <CookiesSnackbar show={showCookiesMessage} setShow={setShowCookiesMessage} />
      <Sidenav show={show} showSidebar={showSidebar} path={pathname} />
      <Navbar showSidebar={showSidebar} />
      {children}
      <Footer path={pathname} />
      <ScrollToTop />
      <Snackbar
        show={show}
        setShow={setShow}
        message={
          <>
            <span>There's an error sending your message. Please write us to </span>
            <a href={`mailto:somos.disandev@gmail.com`}>somos.disandev@gmail.com</a>
          </>
        }
        background="light"
        action={
          <Button onClick={() => setShow(false)} variant="icon" ariaLabel="close snackbar">
            <CloseIcon ariaLabel="close icon" />
          </Button>
        }
      />
    </Main>
  );
};

export default Layout;
