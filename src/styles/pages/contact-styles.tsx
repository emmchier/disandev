import styled from 'styled-components';

export const ContactCol = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  position: relative;

  h3,
  h5 {
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

export const TextContent = styled.div`
  margin-left: ${({ theme }) => theme.spacing(10)};
`;

export const SendContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  transform: translateX(-150px);
`;
