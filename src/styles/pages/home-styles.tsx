import styled from 'styled-components';

export const Content = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  align-items: center;
  display: flex;
  z-index: 2;

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    width: auto;
  }
`;

export const HomeContent = styled.div`
  height: 100vh;
  margin-left: 10%;

  div {
    position: relative;
    display: flex;
    justify-content: center;
    margin: 0;

    span:nth-child(2) {
      margin: 0 ${({ theme }) => theme.spacing(2)} !important;
    }
  }

  button {
    svg {
      transform: translateY(4px) rotate(-90deg) !important;
    }
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    margin-left: 0;
  }
`;

export const TextContent = styled.div`
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;

  h1 {
    font-weight: ${({ theme }) => theme.font.weight.light};
    margin-right: ${({ theme }) => theme.spacing(25)};

    span {
      color: ${({ theme }) => theme.color.black} !important;
    }

    span:nth-child(2) {
      justify-content: flex-start;
      margin: 0 !important;

      @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
        margin: 0 ${({ theme }) => theme.spacing(2)} !important;
      }
    }

    @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
      margin-right: ${({ theme }) => theme.spacing(5)} !important;
      font-size: ${({ theme }) => theme.font.size.large};
      line-height: ${({ theme }) => theme.font.lineHeight.medium};
    }
  }

  span:nth-child(1) {
    color: ${({ theme }) => theme.color.text.primary};
    display: block;
  }

  button {
    margin-top: ${({ theme }) => theme.spacing(5)};
    transform: translateX(-10px);

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const ProjectSectionContent = styled.div`
  margin-top: ${({ theme }) => theme.spacing(25)} !important;

  h3 {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-bottom: ${({ theme }) => theme.spacing(20)} !important;

    p {
      display: flex;
      margin: 0;
    }

    b {
      display: flex;
    }

    @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
      margin-bottom: ${({ theme }) => theme.spacing(10)} !important;
      font-size: ${({ theme }) => theme.font.size.large};
      line-height: ${({ theme }) => theme.font.lineHeight.large};
    }
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: ${({ theme }) => theme.spacing(5)} !important;
  }

  li:nth-child(even) {
    transform: translateY(-130px);

    @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
      transform: translateY(0);
    }
  }
`;

export const ActionContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    margin: ${({ theme }) => theme.spacing(15)} 0;
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    button {
      margin: ${({ theme }) => theme.spacing(15)} 0;
    }
  }
`;

export const ServiceContainer = styled.div`
  button {
    margin-top: ${({ theme }) => theme.spacing(15)};
  }
`;
