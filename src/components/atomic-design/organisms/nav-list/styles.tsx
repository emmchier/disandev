import styled from 'styled-components';

export const FullSelected = styled.span`
  display: inline-block;
  pointer-events: none !important;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  &:after {
    display: block;
    content: '';
    border-bottom: 3px solid ${({ theme }) => theme.color.primary.main};
    border-radius: ${({ theme }) => theme.border.radius.main};
    transform: scaleX(1);
    transform-origin: 0% 100%;
    transition: transform 250ms ease-in-out;
    width: 100%;

    @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
      border-bottom: 3px solid transparent;
    }
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.font.size.medium} !important;
    line-height: ${({ theme }) => theme.font.lineHeight.medium} !important;
  }
`;

export const FullNotSelected = styled.span`
  display: inline-block;
  pointer-events: none;
  margin: 0;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  &:after {
    display: block;
    content: '';
    border-bottom: transparent;
    border-radius: none;
    transform: none;
    transform-origin: none;
    transition: none;
    width: 100%;
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.font.size.medium} !important;
    line-height: ${({ theme }) => theme.font.lineHeight.medium} !important;
  }
`;
