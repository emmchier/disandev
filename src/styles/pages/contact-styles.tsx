import styled from 'styled-components';

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

export const BackButtonContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing(20)};
  position: absolute;
  z-index: 99;
`;

export const SendContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${({ theme }) => theme.spacing(20)};
`;
