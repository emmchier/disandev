import { useState } from 'react';

import { useRouter } from 'next/router';

import ScrollToTop from '../atomic-design/atoms/scroll-to-top';
import Footer from '../atomic-design/molecules/footer';
import Navbar from '../atomic-design/molecules/navbar';
import Sidenav from '../atomic-design/molecules/sidenav';
import CookiesSnackbar from '../atomic-design/molecules/cookies-snackbar';

import { Main } from './styles';
import { FCC } from '../../types';

interface Layouttypes {
  path?: string;
}

const Layout: FCC<Layouttypes> = ({ children }) => {
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
    </Main>
  );
};

export default Layout;
