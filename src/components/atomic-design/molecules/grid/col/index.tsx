import React from 'react';
import { FCC } from '../../../../../types';

import { ColContent, ColTypes, GridCol } from './styles';

const Col: FCC<ColTypes> = ({ children, xs, sm, md, lg, xlg }) => (
  <GridCol xs={xs} sm={sm} md={md} lg={lg} xlg={xlg}>
    <ColContent>{children}</ColContent>
  </GridCol>
);

export default Col;
