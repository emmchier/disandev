import { useContext, useState } from 'react';
import { useRouter } from 'next/router';

import { FCC } from '../../types';

import { ScrollToTop, Text } from '../atomic-design/atoms';
import { Navbar, Footer, Sidenav, CookiesSnackbar, Snackbar } from '../atomic-design/molecules';

import { Main } from './styles';
import { MainContext } from '../../context';

interface Layouttypes {
  path?: string;
}

const Layout: FCC<Layouttypes> = ({ children }) => {
  const { pathname } = useRouter();
  const [show, setShow] = useState(false);
  const showSidebar = (): void => setShow(!show);
  const [showCookiesMessage, setShowCookiesMessage] = useState(false);
  const { showSnackbar, setShowSnackbar } = useContext(MainContext);

  return (
    <Main>
      <CookiesSnackbar show={showCookiesMessage} setShow={setShowCookiesMessage} />
      <Sidenav show={show} showSidebar={showSidebar} path={pathname} />
      <Navbar showSidebar={showSidebar} />
      {children}
      <Footer path={pathname} />
      <ScrollToTop />
      <Snackbar
        show={showSnackbar}
        setShow={setShowSnackbar}
        message={<Text>Email copied!</Text>}
        position="bottomRight"
        background="dark"
        autoHideEnabled={true}
      />
    </Main>
  );
};

export default Layout;
