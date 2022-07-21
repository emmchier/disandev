import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.span`
  display: inline-block;
  margin: 0;
  &:after {
    display: block;
    content: '';
    border-bottom: 3px solid ${({ theme }) => theme.color.primary.main};
    border-radius: ${({ theme }) => theme.border.radius.main};
    transform: scaleX(1);
    transform-origin: 0% 100%;
    transition: transform 250ms ease-in-out;
    width: 50%;

    @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
      border-bottom: 3px solid transparent;
    }
  }
  &:hover:after {
    transform: scaleX(2);
    transform-origin: 0% 100%;
    border-radius: ${({ theme }) => theme.border.radius.small};
    transition: transform 250ms ease-in-out;
  }
  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.font.size.medium};
    line-height: ${({ theme }) => theme.font.lineHeight.medium};
    padding: ${({ theme }) => theme.spacing(1.5)} 0;
  }
`;

export const TextNotSelected = styled.span`
  display: inline-block;
  margin: 0;

  &:hover {
    color: ${({ theme }) => theme.color.primary.main};

    @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
      color: ${({ theme }) => theme.color.text.primary};
    }
  }

  &:after {
    display: block;
    content: '';
    border-bottom: transparent;
    border-radius: none;
    transform: none;
    transform-origin: none;
    transition: none;
    width: 0;
  }
  &:hover:after {
    transform: none;
    transform-origin: none;
    border-radius: none;
    transition: none;
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.font.size.medium};
    line-height: ${({ theme }) => theme.font.lineHeight.medium};
    padding: ${({ theme }) => theme.spacing(1.5)} 0;
  }
`;

export const Dot = styled.span`
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.color.primary.main} !important;
  font-size: ${({ theme }) => theme.spacing(10)} !important;
  transform: translateY(-6px);
`;
