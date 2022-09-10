import styled from 'styled-components';

export const Content = styled.div`
  h3 {
    margin-bottom: ${({ theme }) => theme.spacing(5)} !important;

    @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
      margin-bottom: ${({ theme }) => theme.spacing(2)} !important;
    }
  }

  h4 {
    font-size: ${({ theme }) => theme.font.size.large};
  }

  p {
    @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
      font-size: ${({ theme }) => theme.font.size.medium};
      margin-top: ${({ theme }) => theme.spacing(5)} !important;
    }
  }
`;
