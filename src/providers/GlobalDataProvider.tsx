import React, { FC, useEffect, useState } from 'react';

import { getGlobalData } from '../api/globalData';
import { GlobalData } from '../interfaces';
import { GlobalDataContext } from '../context/index';

interface Proptypes {
  children: React.ReactNode;
}

const GlobalDataProvider: FC<Proptypes> = ({ children }) => {
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
    <GlobalDataContext.Provider value={{ information }}>{children}</GlobalDataContext.Provider>
  );
};

export default GlobalDataProvider;
