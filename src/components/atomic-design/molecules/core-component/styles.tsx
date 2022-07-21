import styled from 'styled-components';

export const Content = styled.div`
  position: relative;
  z-index: 0;

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
  }
`;

export const AtomContent = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    justify-content: flex-start;
  }
`;

export const Atom = styled.div`
  position: absolute;
`;

export const Ring = styled.div`
  div {
    position: relative;
    width: 185vh;
    height: 185vh;
    top: -60px;
    right: -40px;
    border: 1px solid ${({ theme }) => theme.color.disabled};
    border-radius: 50%;
    margin: 5%;
    background: transparent;
    opacity: 0.6;
    z-index: 1;

    @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
      width: 90vh;
      height: 90vh;
      top: 0;
      right: ${({ theme }) => theme.spacing(20)};
    }
  }
`;

export const MainCore = styled.div`
  div {
    position: absolute;
    width: 117vh;
    height: 117vh;
    background: ${({ theme }) => theme.color.gradient.primary};
    border: 2px solid white;
    border-radius: 50%;
    top: 280px;
    right: 10%;

    @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
      width: 73vh;
      height: 73vh;
      top: ${({ theme }) => theme.spacing(25)};
      right: ${({ theme }) => theme.spacing(23)};
    }
  }
`;

export const Shapes = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ShapesContent = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Particles = styled.div`
  ul {
    li {
      opacity: 0.5;
      &:nth-child(1) {
        div {
          position: absolute;
          z-index: 1;
          top: 80px;
          right: 195px;
          width: 30px;
          height: 30px;
        }
        @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
          display: none;
        }
      }
      &:nth-child(2) {
        div {
          position: absolute;
          z-index: 1;
          top: 140px;
          transform: translateX(-80px);
          width: 18px;
          height: 18px;

          @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
            width: 15px;
            height: 15px;
            top: 130px;
            transform: translateX(40px);
          }
        }
      }
      &:nth-child(3) {
        div {
          position: absolute;
          z-index: 1;
          bottom: 100px;
          transform: translateX(30px);
          width: 18.89px;
          height: 18.89px;
        }
        @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
          display: none;
        }
      }
      &:nth-child(4) {
        div {
          position: absolute;
          z-index: 1;
          bottom: 60px;
          left: 380px;
          width: 23px;
          height: 23px;
        }
        @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
          display: none;
        }
      }
      &:nth-child(5) {
        div {
          position: absolute;
          z-index: 1;
          bottom: 70px;
          right: 140px;
          width: 34.8px;
          height: 34.8px;

          @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
            bottom: 130px;
            left: 85px;
            width: 25px;
            height: 25px;
          }
        }
      }
    }
  }
`;

export const Lines = styled.div`
  div {
    &:nth-child(1) {
      transform: rotate(90deg);
      position: absolute;
      top: 93px;
      right: 450px;
    }
    &:nth-child(2) {
      position: absolute;
      bottom: 220px;
      transform: translateX(130px);
    }
  }
  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const ThreeParticles = styled.div`
  ul {
    li {
      margin-right: ${({ theme }) => theme.spacing(2)};
    }

    &:nth-child(1) {
      position: absolute;
      top: 120px;
      left: 330px;

      @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
        top: 250px !important;
        left: 290px !important;
      }
    }
    &:nth-child(2) {
      transform: rotate(90deg);
      position: absolute;
      bottom: 170px;
      left: 75px;

      @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
        display: none;
      }
    }
  }
`;

export const Textures = styled.div`
  svg {
    position: absolute;
    height: ${({ theme }) => theme.spacing(70)};
    top: 140px;
    left: 0;
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    svg {
      display: none;
    }
  }
`;
