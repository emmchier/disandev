import React, { FC, useState } from 'react';
import { MainContext } from '../context';

interface Proptypes {
  children: React.ReactNode;
}

const MainProvider: FC<Proptypes> = ({ children }) => {
  const [allowCookies, setAllowCookies] = useState(false);

  return (
    <MainContext.Provider value={{ allowCookies, setAllowCookies }}>
      {children}
    </MainContext.Provider>
  );
};

export default MainProvider;
