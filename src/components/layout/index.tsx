import { FC } from 'react';

import { Main } from './styles';

interface Proptypes {
  children: React.ReactNode;
  path?: string;
}

const Layout: FC<Proptypes> = ({ children }) => {
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
