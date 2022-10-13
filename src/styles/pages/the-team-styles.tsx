import styled from 'styled-components';

export const PageHeaderContainer = styled.div`
  position: relative;

  h2 {
    position: relative;
    z-index: 1;

    span {
      justify-content: flex-start !important;
    }

    @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
      text-align: start;

      span:nth-child(1) {
        margin-right: ${({ theme }) => theme.spacing(2)} !important;
      }

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

export const MembersHeading = styled.div`
  p {
    margin-bottom: ${({ theme }) => theme.spacing(15)};
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    h3 {
      margin-bottom: ${({ theme }) => theme.spacing(10)} !important;
      p {
        display: inline;
        margin-left: ${({ theme }) => theme.spacing(2)} !important;
      }
    }
  }
`;

export const OurValuesContent = styled.div`
  background: ${({ theme }) => theme.color.gradient.primary};
  padding: ${({ theme }) => theme.spacing(20)} 0 ${({ theme }) => theme.spacing(30)};
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
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  section {
    width: ${({ theme }) => theme.spacing(150)};
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    section {
      width: 100%;

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
      margin-top: ${({ theme }) => theme.spacing(10)} !important;
    }

    a {
      div {
        h4 {
          margin-top: 0 !important;
          div {
            span {
              font-size: ${({ theme }) => theme.font.size.large} !important;
            }
          }
        }
      }
    }
  }
`;
