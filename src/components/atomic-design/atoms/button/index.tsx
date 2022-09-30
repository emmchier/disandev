import React from 'react';
import { FCC } from '../../../../types';

import { Icon } from '../../atoms';

import { Content, IconLeft, IconRight } from './styles';

interface ButtonTypes {
  type?: 'submit' | 'reset' | 'button';
  color?: 'primary' | 'secondary';
  variant?: 'contained' | 'outlined' | 'text' | 'icon';
  fullWidth?: boolean;
  ariaLabel?: string;
  iconRight?: boolean;
  iconLeft?: boolean;
  disabled?: boolean;
  onClick?: (e: any) => any;
}

export const Button: FCC<ButtonTypes> = ({
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
  <Content
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
  </Content>
);
