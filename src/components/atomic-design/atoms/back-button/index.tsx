import React, { FC } from 'react';

import { Button } from '../../atoms';

import { Content } from './styles';

interface BackButtonPropTypes {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigate?: any;
  showLabel?: boolean;
}

export const BackButton: FC<BackButtonPropTypes> = ({ navigate, showLabel = true }) => (
  <Content>
    <Button
      variant="text"
      iconLeft={true}
      ariaLabel="back button"
      onClick={(): void => navigate(-1 || '/')}
    >
      {showLabel && 'Back'}
    </Button>
  </Content>
);
