import { createContext } from 'react';

import { GlobalData } from '../interfaces';

export const GlobalDataContext = createContext<GlobalData | null>(null);

export const MainContext = createContext<any | null>(null);
