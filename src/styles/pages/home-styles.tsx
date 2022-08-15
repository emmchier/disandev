import styled from 'styled-components';
import { swing } from '../../components/ui/animations';

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
  }
`;

export const TextContent = styled.div`
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;

  h1 {
    font-weight: ${({ theme }) => theme.font.weight.regular};
    margin-right: ${({ theme }) => theme.spacing(25)};

    span {
      color: ${({ theme }) => theme.color.black} !important;
    }

    @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
      margin-right: ${({ theme }) => theme.spacing(5)} !important;
    }
  }

  span:nth-child(1) {
    color: ${({ theme }) => theme.color.text.primary};
    display: block;
  }

  button {
    position: relative;
    margin-left: 0 !important;
    margin-right: 0 !important;
    margin-top: ${({ theme }) => theme.spacing(3)};
    transform: translateX(-10px);

    span {
      transform: translateY(3px) !important;
      transition: all 0.2s ease-in-out;
    }

    &:hover,
    &:active {
      transition: 0.2s ease-in-out;
      color: ${({ theme }) => theme.color.black};

      svg {
        filter: none;
      }

      span {
        animation: ${swing} 0.5s;
        transition: all 0.2s ease-in-out;
      }
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
