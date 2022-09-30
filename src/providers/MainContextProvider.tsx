import React, { useState } from 'react';
import { FCC } from '../types';

import { MainContext } from '../context';

export const MainProvider: FCC = ({ children }) => {
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
