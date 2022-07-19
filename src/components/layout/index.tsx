import { FC, useContext } from 'react';
import { GlobalDataContext } from '../../context';

import { Main } from './styles';

interface Proptypes {
  children: React.ReactNode;
  path?: string;
}

const Layout: FC<Proptypes> = ({ children }) => {
  const context = useContext(GlobalDataContext);
  console.log(context?.information);

  return (
    <Main>
      {/* <Navbar /> */}
      {children}
      {/* <Footer /> */}
      {/* <SocialMediaContainer>
        <SocialNetworkList
          list={networks}
          orientation="vertical"
          color="default"
          gap={3}
          isLine={true}
          lineSize={30}
          hoverIconColor={theme.color.black}
        />
      </SocialMediaContainer> */}
    </Main>
  );
};

export default Layout;
