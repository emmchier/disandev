import styled from 'styled-components';

export const ErrorContent = styled.div`
  button {
    margin-top: ${({ theme }) => theme.spacing(15)};
  }
`;

export const ContactCol = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  position: relative;

  h2,
  h4 {
    span {
      display: block;
    }
  }
`;
