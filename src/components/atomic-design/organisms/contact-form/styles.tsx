import styled from 'styled-components';

export const Content = styled.div`
  width: 70%;

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    width: 70%;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    button {
      display: block;
      width: 100%;
    }
  }
`;

export const Error = styled.p`
  color: ${({ theme }) => theme.color.text.error};
`;
