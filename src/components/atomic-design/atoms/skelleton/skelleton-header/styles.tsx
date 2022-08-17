import styled from 'styled-components';

export const Content = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.color.background.copy};
  animation: pulse 1s infinite;

  figure {
    svg {
      width: 120px !important;
      height: 120px !important;
      opacity: 0.5;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 0.5;
    }
    70% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
  }
`;
