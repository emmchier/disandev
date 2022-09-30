import React from 'react';

import { FCC } from '../../../../types';

import { Content } from './styles';

const Chip: FCC = ({ children }) => <Content>#{children}</Content>;

export default Chip;
