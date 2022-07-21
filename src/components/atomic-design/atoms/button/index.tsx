import React, { FC } from 'react';
import Icon from '../icon';

import { Container, IconLeft, IconRight } from './styles';

interface PropTypes {
  children: React.ReactNode;
  type?: 'submit' | 'reset' | 'button';
  color?: string;
  variant?: string;
  fullWidth?: boolean;
  ariaLabel?: string;
  iconRight?: boolean;
  iconLeft?: boolean;
  disabled?: boolean;
  onClick?: (e: any) => any;
}

const Button: FC<PropTypes> = ({
  children,
  type = 'button',
  color = 'primary',
  variant = 'contained',
  fullWidth = false,
  disabled = false,
  ariaLabel = '',
  iconLeft = false,
  iconRight = false,
  onClick,
}) => (
  <Container
    type={type}
    color={color}
    variant={variant}
    fullWidth={fullWidth}
    disabled={disabled}
    aria-label={ariaLabel}
    onClick={onClick}
  >
    <IconLeft>
      {iconLeft && <Icon ariaLabel="arrow to the left" icon="arrow" direction="left" />}
    </IconLeft>
    {children}
    <IconRight>
      {iconRight && <Icon ariaLabel="arrow to the left" icon="arrow" direction="right" />}
    </IconRight>
  </Container>
);

export default Button;
