import styled from 'styled-components';

export const PageHeaderContainer = styled.div`
  h2 {
    position: relative;
    z-index: 9;

    @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
      text-align: start;
      display: flex;

      span {
        font-size: ${({ theme }) => theme.font.size.largeX};
        display: inline !important;
        text-align: start !important;
        div {
          display: inline !important;
          margin: 0;
          text-align: start;
          font-size: ${({ theme }) => theme.font.size.largeX};
        }
      }
    }
  }

  svg {
    position: absolute !important;
    height: auto;
    z-index: 0;
    right: 0;
    top: 5vh;
    opacity: 0.8;
  }
`;

export const MainContent = styled.div`
  padding-bottom: ${({ theme }) => theme.spacing(30)};
  position: relative;

  a {
    margin-left: ${({ theme }) => theme.spacing(1)};
    @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
      span {
        margin-left: 0 !important;
      }
    }
  }
`;

export const QualityContent = styled.section`
  background-color: ${({ theme }) => theme.color.background.copy};
  padding: ${({ theme }) => theme.spacing(20)} ${({ theme }) => theme.spacing(80)} !important;

  h4,
  p {
    margin-top: ${({ theme }) => theme.spacing(8)} !important;
  }

  a {
    color: ${({ theme }) => theme.color.primary.main};
    font-weight: ${({ theme }) => theme.font.weight.medium};
  }

  @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing(5)} !important;
  }
`;

export const ValuesContent = styled.section`
  padding: ${({ theme }) => theme.spacing(20)} ${({ theme }) => theme.spacing(80)} !important;

  h4,
  p {
    margin-top: ${({ theme }) => theme.spacing(8)} !important;
  }

  a {
    color: ${({ theme }) => theme.color.primary.main};
    font-weight: ${({ theme }) => theme.font.weight.medium};
  }

  @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing(5)} !important;
  }
`;
