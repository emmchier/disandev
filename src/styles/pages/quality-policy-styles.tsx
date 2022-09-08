import styled from 'styled-components';

export const PageHeaderContainer = styled.div`
  h2 {
    position: relative;
    z-index: 9;

    @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
      text-align: start;

      span {
        display: block;

        div {
          margin: 0;
          text-align: start;
        }
      }
    }
  }

  svg {
    position: absolute !important;
    z-index: 0;
    right: 0;
    top: 20vh;

    @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
      top: 0 !important;
    }
  }

  @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
    height: auto !important;
  }
`;

export const MainContent = styled.div`
  padding-bottom: ${({ theme }) => theme.spacing(30)};

  button {
    font-size: ${({ theme }) => theme.font.size.medium};
    color: ${({ theme }) => theme.color.primary.main} !important;
    line-height: 0;
    display: inline !important;
  }
`;

export const QualityContent = styled.section`
  background-color: ${({ theme }) => theme.color.background.copy};
  padding: ${({ theme }) => theme.spacing(20)} ${({ theme }) => theme.spacing(80)} !important;

  h5,
  p {
    margin-top: ${({ theme }) => theme.spacing(8)} !important;
  }

  @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing(5)} !important;
  }
`;

export const ValuesContent = styled.section`
  padding: ${({ theme }) => theme.spacing(20)} ${({ theme }) => theme.spacing(80)} !important;

  h5,
  p {
    margin-top: ${({ theme }) => theme.spacing(8)} !important;
  }

  @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing(5)} !important;
  }
`;
