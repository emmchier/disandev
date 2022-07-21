import { useRouter } from 'next/router';
import { FC, useContext, useState } from 'react';
import { GlobalDataContext } from '../../context';
import ScrollToTop from '../atomic-design/atoms/scroll-to-top';
import Footer from '../atomic-design/molecules/footer';
import Navbar from '../atomic-design/molecules/navbar';
import Sidenav from '../atomic-design/molecules/sidenav';

import { Main } from './styles';

interface Proptypes {
  children: React.ReactNode;
  path?: string;
}

const Layout: FC<Proptypes> = ({ children }) => {
  const { pathname } = useRouter();
  const [show, setShow] = useState(false);
  const showSidebar = (): void => setShow(!show);

  // const context = useContext(GlobalDataContext);
  // console.log(context?.information);

  return (
    <Main>
      <Sidenav show={show} showSidebar={showSidebar} path={pathname} />
      <Navbar showSidebar={showSidebar} />
      {children}
      <Footer path={pathname} />
      <ScrollToTop />
    </Main>
  );
};

export default Layout;
