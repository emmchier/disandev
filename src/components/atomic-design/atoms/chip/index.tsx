import React from 'react';

import { FCC } from '../../../../types';

import { Content } from './styles';

export const Chip: FCC = ({ children }) => <Content>#{children}</Content>;
