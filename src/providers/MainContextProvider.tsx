import React, { FC, useState } from 'react';
import { MainContext } from '../context';

interface Proptypes {
  children: React.ReactNode;
}

const MainProvider: FC<Proptypes> = ({ children }) => {
  const [allowCookies, setAllowCookies] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(0);

  return (
    <MainContext.Provider
      value={{
        allowCookies,
        setAllowCookies,
        showSnackbar,
        setShowSnackbar,
        loading,
        setLoading,
        response,
        setResponse,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainProvider;
