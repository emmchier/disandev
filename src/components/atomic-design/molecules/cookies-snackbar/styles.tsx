import styled from 'styled-components';

export const Content = styled.div``;

export const CookiesActions = styled.div`
  display: flex;
  align-items: center;
  margin: ${({ theme }) => theme.spacing(5)} !important;

  button {
    margin: 0;
  }

  a {
    margin-right: ${({ theme }) => theme.spacing(8)} !important;

    @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
      font-size: ${({ theme }) => theme.font.size.small};
      margin-right: 0 !important;
    }
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    justify-content: space-between;
    width: 100%;

    a {
      margin-left: ${({ theme }) => theme.spacing(5)} !important;
    }

    button {
      margin: 0 !important;
      margin-right: ${({ theme }) => theme.spacing(5)} !important;
    }
  }
`;
