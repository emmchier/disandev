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
  background-color: ${({ theme }) => theme.color.white};
  animation: pulse 1s infinite;

  figure {
    svg {
      width: 100% !important;
      height: 100% !important;
      opacity: 0.5;
    }
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing(5)} !important;
    height: 85%;
    width: 85%;
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
