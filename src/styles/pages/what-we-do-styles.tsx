import styled from 'styled-components';

export const PageHeaderContainer = styled.div`
  position: relative;

  h2 {
    position: relative;
    z-index: 1;

    @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
      text-align: start;

      span {
        display: block;
        div {
          display: inline-flex !important;
          margin: 0;
          text-align: start;
        }
      }
    }
  }

  svg {
    position: absolute;
    top: 33%;
    right: -15%;

    @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
      top: 15%;
      right: -15%;
    }
  }
`;

export const WhatWeDoContent = styled.div`
  section {
    background-color: transparent;
  }
  background: ${({ theme }) => theme.color.gradient.primary};
  padding: ${({ theme }) => theme.spacing(20)} 0 0;

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing(10)} 0 ${({ theme }) => theme.spacing(10)};
  }
`;

export const TechsContent = styled.div`
  padding-top: ${({ theme }) => theme.spacing(30)};

  h3 {
    margin-bottom: ${({ theme }) => theme.spacing(25)} !important;

    @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
      margin-bottom: ${({ theme }) => theme.spacing(15)} !important;
    }
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    padding-top: ${({ theme }) => theme.spacing(10)};
  }
`;

export const ServicesContent = styled.div`
  padding-bottom: ${({ theme }) => theme.spacing(20)};
`;
