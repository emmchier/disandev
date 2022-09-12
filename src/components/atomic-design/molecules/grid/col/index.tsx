import React, { FC } from 'react';

import { ColContent, GridCol, GridItemProps } from './styles';

const Col: FC<GridItemProps> = ({ children, xs, sm, md, lg, xlg }) => (
  <GridCol xs={xs} sm={sm} md={md} lg={lg} xlg={xlg}>
    <ColContent>{children}</ColContent>
  </GridCol>
);

export default Col;
