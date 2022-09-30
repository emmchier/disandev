import React, { FC } from 'react';

import {
  ArrowIcon,
  Behance,
  BgDevices,
  BgHero,
  Brand,
  CloseIcon,
  Facebook,
  Github,
  Instagram,
  Isotype,
  LinkedIn,
  TeamShape,
  Texture,
  Twitter,
} from '../../../ui/svg';

import { Content } from './styles';

interface IconI {
  ariaLabel: string;
  icon?: string;
  color?: string;
  variant?: string;
  hover?: boolean;
  hoverColor?: string;
  direction?: string;
}

export const Icon: FC<IconI> = ({
  ariaLabel = '',
  icon = '',
  variant = '',
  hover = false,
  hoverColor,
  direction = 'bottom',
}) => {
  const getIcon = () => {
    switch (icon) {
      case 'brand':
        return <Brand ariaLabel={ariaLabel} variant={variant} />;
      case 'iso':
        return <Isotype ariaLabel={ariaLabel} variant={variant} />;
      case 'behance':
        return (
          <Behance ariaLabel={ariaLabel} variant={variant} hover={hover} hoverColor={hoverColor} />
        );
      case 'linkedin':
        return (
          <LinkedIn ariaLabel={ariaLabel} variant={variant} hover={hover} hoverColor={hoverColor} />
        );
      case 'facebook':
        return (
          <Facebook ariaLabel={ariaLabel} variant={variant} hover={hover} hoverColor={hoverColor} />
        );
      case 'instagram':
        return (
          <Instagram
            ariaLabel={ariaLabel}
            variant={variant}
            hover={hover}
            hoverColor={hoverColor}
          />
        );
      case 'twitter':
        return (
          <Twitter ariaLabel={ariaLabel} variant={variant} hover={hover} hoverColor={hoverColor} />
        );
      case 'github':
        return (
          <Github ariaLabel={ariaLabel} variant={variant} hover={hover} hoverColor={hoverColor} />
        );
      case 'close':
        return (
          <CloseIcon
            ariaLabel={ariaLabel}
            variant={variant}
            hover={hover}
            hoverColor={hoverColor}
          />
        );
      case 'arrow':
        return (
          <ArrowIcon
            ariaLabel={ariaLabel}
            variant={variant}
            hover={hover}
            hoverColor={hoverColor}
          />
        );
      case 'teamShape':
        return <TeamShape ariaLabel={ariaLabel} />;
      case 'texture':
        return <Texture ariaLabel={ariaLabel} />;
      case 'devices':
        return <BgDevices ariaLabel={ariaLabel} />;
      case 'hero':
        return <BgHero ariaLabel={ariaLabel} />;
      default:
        break;
    }
  };

  return <Content direction={direction}>{getIcon()}</Content>;
};
