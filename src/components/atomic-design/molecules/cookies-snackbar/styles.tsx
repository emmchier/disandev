import styled from 'styled-components';

export const Content = styled.div`
  button {
    margin: ${({ theme }) => theme.spacing(4)};

    @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
      /* width: 100%; */
    }
  }
`;
