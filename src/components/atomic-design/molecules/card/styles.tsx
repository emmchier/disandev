import styled from 'styled-components';
import { theme } from '../../../../styles/theme';

interface CardProps {
  width?: number;
  height?: number;
  padding?: string;
  borderRadius?: boolean;
  boxShadow?: boolean;
  isLower?: boolean;
  wrapperHeight?: string;
  wrapperWidth?: string;
  imgHeight?: string;
  imgWidth?: string;
}

export const CardContent = styled.div<CardProps>`
  width: ${({ width }) => width && '100%'} !important;
  height: ${({ height }) => height && '100%'} !important;
  padding: ${({ padding }) => padding};
  border-radius: ${({ borderRadius }) => borderRadius && theme.border.radius.main};
  box-shadow: ${({ boxShadow }) => boxShadow && theme.shadow.main};
`;

export const TitleContent = styled.div<CardProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h4 {
    text-transform: ${({ isLower }) => (isLower ? 'lowercase' : 'uppercase')};
    width: 100%;
    margin-top: ${({ theme }) => theme.spacing(10)} !important;
    margin-bottom: ${({ theme }) => theme.spacing(2)} !important;

    @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
      margin-top: ${({ theme }) => theme.spacing(4)} !important;
      margin-bottom: 0 !important;
    }
  }

  p {
    @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
      font-size: ${({ theme }) => theme.font.size.smallX};
      font-weight: ${({ theme }) => theme.font.lineHeight.smallXX};
    }
  }

  li {
    transform: translateY(0) !important;
  }
`;

export const DescContent = styled(TitleContent)`
  margin-top: ${({ theme }) => theme.spacing(2)};
  justify-content: flex-start;

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: 0;
  }
`;

export const HoverContainer = styled.div<CardProps>`
  overflow: hidden !important;
  position: relative;

  .span {
    height: ${({ wrapperHeight }) => wrapperHeight} !important;
    width: ${({ wrapperWidth }) => wrapperWidth} !important;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      height: ${({ imgHeight }) => imgHeight} !important;
      width: ${({ imgWidth }) => imgWidth} !important;
    }
  }
`;

export const HoverContent = styled.div`
  background-color: ${({ theme }) => theme.color.secondary.dark};
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  transition: ${({ theme }) => theme.transition.main};

  &:hover {
    display: inherit !important;
    opacity: 0.5 !important;
    transition: ${({ theme }) => theme.transition.main} !important;
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const ButtonContent = styled.div`
  background-color: ${({ theme }) => theme.color.secondary.dark};
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  width: 100%;
  height: 100%;

  button {
    border: 1px solid ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.white};
    background: transparent !important;

    svg {
      filter: brightness(0) invert(1);
    }

    &:hover {
      border: 1px solid ${({ theme }) => theme.color.white} !important;
      color: ${({ theme }) => theme.color.black} !important;
      background: ${({ theme }) => theme.color.white} !important;

      svg {
        filter: brightness(0) saturate(100%) invert(0%) sepia(96%) saturate(95%) hue-rotate(282deg)
          brightness(98%) contrast(64%);
      }
    }
  }
`;
