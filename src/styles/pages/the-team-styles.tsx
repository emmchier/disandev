import styled from 'styled-components';

export const PageHeaderContainer = styled.div`
  position: relative;

  h2 {
    position: relative;
    z-index: 1;

    @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
      text-align: start;
      span {
        display: block;
        div {
          margin: 0;
          text-align: start;
        }
      }
    }
  }

  svg {
    position: absolute;
    top: 21%;
    left: -18%;
  }
`;

export const MembersContent = styled.div`
  margin: ${({ theme }) => theme.spacing(30)} 0;

  @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
    h4 {
      font-size: ${({ theme }) => theme.font.size.large};
      line-height: ${({ theme }) => theme.font.lineHeight.smallXX};
    }

    h5 {
      font-size: ${({ theme }) => theme.font.size.small};
      line-height: ${({ theme }) => theme.font.lineHeight.small};
    }
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: ${({ theme }) => theme.spacing(10)};
    margin-bottom: ${({ theme }) => theme.spacing(2)} !important;
  }
`;

export const OurValuesContent = styled.div`
  background: ${({ theme }) => theme.color.gradient.primary};
  padding: ${({ theme }) => theme.spacing(20)} 0 ${({ theme }) => theme.spacing(15)};
  margin: ${({ theme }) => theme.spacing(30)} 0;

  section {
    background-color: transparent;
    position: relative;

    ul {
      margin: 0;
    }

    p {
      width: 95%;

      @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
        margin-top: ${({ theme }) => theme.spacing(8)};
      }
    }

    p:nth-child(1) {
      margin-bottom: ${({ theme }) => theme.spacing(8)};
    }
  }
`;

export const OurValuesImage = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  position: absolute;
  transform: translateY(100px);

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    width: 45% !important;
    height: 115% !important;
    position: absolute;
    transform: translateY(0) !important;
    transform: translateX(70px) !important;
  }
`;

export const TeamCallToAction = styled.div`
  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    section {
      div {
        div {
          div {
            margin-top: 0;
          }
        }
      }
    }
    h3 {
      font-size: ${({ theme }) => theme.font.size.large} !important;
    }
    h4 {
      div {
        span {
          font-size: ${({ theme }) => theme.font.size.large} !important;
        }
      }
    }
  }
`;
