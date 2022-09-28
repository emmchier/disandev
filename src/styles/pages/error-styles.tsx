import styled from 'styled-components';

export const ErrorContent = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    margin: ${({ theme }) => theme.spacing(15)} 0;
  }
`;

export const ErrorText = styled.div`
  padding: ${({ theme }) => theme.spacing(20)};
  button {
    margin-top: ${({ theme }) => theme.spacing(15)};

    &:hover {
      @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
        svg {
          filter: brightness(0) saturate(100%) invert(38%) sepia(69%) saturate(4375%)
            hue-rotate(234deg) brightness(96%) contrast(96%);
        }
      }
    }
  }

  @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0;
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    order: 2;
    width: 100% !important;
  }
`;

export const BannerContainer = styled.div`
  height: 60%;
  width: 60%;
  position: relative;
  padding: ${({ theme }) => theme.spacing(30)};

  img {
    z-index: 2;
    position: absolute;
  }

  @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
    height: 70%;
    width: 70%;
    margin-top: ${({ theme }) => theme.spacing(15)};
    padding: ${({ theme }) => theme.spacing(15)} ${({ theme }) => theme.spacing(15)} 0;
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    height: 100%;
    width: 100%;
    margin-top: 0;
    padding: 0;
  }
`;

export const ContactCol = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  position: relative;

  h3,
  h5 {
    color: ${({ theme }) => theme.color.text.primary};
    span {
      color: ${({ theme }) => theme.color.text.primary};
      display: block;
    }
  }

  h5 {
    line-height: ${({ theme }) => theme.font.lineHeight.medium};
    padding-top: ${({ theme }) => theme.spacing(5)};
  }
`;
