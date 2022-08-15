import styled from 'styled-components';

export const Content = styled.div`
  margin: ${({ theme }) => theme.spacing(30)} ${({ theme }) => theme.spacing(30)} 0;

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    margin: ${({ theme }) => theme.spacing(10)} ${({ theme }) => theme.spacing(3)} 0;
  }
`;
