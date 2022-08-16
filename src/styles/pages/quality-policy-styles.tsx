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
  }
`;

export const QualityContent = styled.div`
  margin-top: ${({ theme }) => theme.spacing(30)} !important;
  background-color: ${({ theme }) => theme.color.background.copy};
  padding: ${({ theme }) => theme.spacing(20)} ${({ theme }) => theme.spacing(80)} !important;

  @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: ${({ theme }) => theme.spacing(20)} !important;
    padding: ${({ theme }) => theme.spacing(5)} 0 !important;
  }
`;

export const ValuesContent = styled.div`
  padding: ${({ theme }) => theme.spacing(20)} ${({ theme }) => theme.spacing(80)} !important;

  @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing(5)} 0 !important;
  }
`;
