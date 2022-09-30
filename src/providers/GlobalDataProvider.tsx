import React, { useEffect, useState } from 'react';

import { getGlobalData } from '../api/globalData';
import { GlobalData } from '../interfaces';
import { GlobalDataContext } from '../context/index';
import { FCC } from '../types';

export const GlobalDataProvider: FCC = ({ children }) => {
  const [allowCookies, setAllowCookies] = useState(false);

  const [data, setData] = useState<GlobalData>({
    info: {},
  });

  useEffect(() => {
    getGlobalData().then((props) => {
      setData({
        ...data,
        info: props?.props?.info[0],
      });
    });
  }, []);

  const information = data?.info?.fields;

  return (
    <GlobalDataContext.Provider value={{ information, allowCookies, setAllowCookies }}>
      {children}
    </GlobalDataContext.Provider>
  );
};
