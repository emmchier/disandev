import styled from 'styled-components';

export const PageHeaderContainer = styled.div`
  position: relative;

  h2 {
    position: relative;
    z-index: 1;
  }
  svg {
    position: absolute;
    top: 33%;
    right: -15%;
  }
`;

export const WhatWeDoContent = styled.div`
  section {
    background-color: transparent;
  }
  background: ${({ theme }) => theme.color.gradient.primary};
  padding: ${({ theme }) => theme.spacing(20)} 0;
`;

export const TechsContent = styled.div`
  padding-top: ${({ theme }) => theme.spacing(30)};

  h3 {
    margin-bottom: ${({ theme }) => theme.spacing(25)} !important;
  }
`;

export const ServicesContent = styled.div`
  padding-bottom: ${({ theme }) => theme.spacing(20)};
`;
