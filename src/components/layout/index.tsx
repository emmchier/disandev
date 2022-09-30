import { useState } from 'react';
import { useRouter } from 'next/router';

import { FCC } from '../../types';

import { ScrollToTop } from '../atomic-design/atoms';
import { Navbar, Footer, Sidenav, CookiesSnackbar } from '../atomic-design/molecules';

import { Main } from './styles';

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
