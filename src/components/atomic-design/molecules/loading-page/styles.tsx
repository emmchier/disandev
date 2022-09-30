import styled from 'styled-components';

export const Screen = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 999999;
  height: 100vh;
  width: 100%;
  opacity: 0;
  animation: fade 0.5s ease-in forwards;
  background: #ffffff;

  @keyframes fade {
    0% {
      opacity: 0.4;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  animation: pulse 1s infinite;
  transform: translateX(-10px);

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

export const Circle = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #6957f0;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export const InnerCircle = styled.div`
  width: 70px;
  height: 70px;
  position: absolute;
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: white;
`;

export const Ball = styled.div`
  position: relative;
  z-index: 999;
  transform: translate(-50%, -50%);
  height: 23px;
  width: 23px;
  border-radius: 50%;
  background: #6957f0;
`;

export const Line = styled.div`
  position: absolute;
  z-index: 999;
  height: 78px;
  width: 15px;
  border-radius: 30px;
  background: #6957f0;
  top: -20px;
`;

export const LineRight = styled(Line)`
  right: 0;
`;

export const LineLeft = styled(Line)`
  left: 0;
`;

export const CircleRight = styled(Circle)`
  transform: translateX(-7.5px) !important;
`;

export const CircleLeft = styled(Circle)`
  transform: translateX(7.5px) !important;
`;

export const InnerCircleLeft = styled(InnerCircle)`
  animation: spin 0.7s ease-in forwards infinite;
`;

export const InnerCircleRight = styled(InnerCircle)`
  animation: spin 0.7s ease-in forwards infinite;
`;
