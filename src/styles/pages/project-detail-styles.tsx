import styled from 'styled-components';

export const BannerContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden !important;

  img {
    position: absolute;
    z-index: 2;
  }
`;

export const ActionContent = styled.div`
  button {
    margin: ${({ theme }) => theme.spacing(10)} 0 !important;
  }
`;

export const MainInfoContent = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(20)} !important;
  h2 {
    color: ${({ theme }) => theme.color.black};
    width: 70%;

    @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
      width: 100%;
    }
  }

  h5 {
    width: 50%;
    margin: ${({ theme }) => theme.spacing(5)} 0 !important;

    @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
      width: 100%;
    }
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    margin-bottom: ${({ theme }) => theme.spacing(10)} !important;
  }
`;

export const PaddingContent = styled.div`
  padding: ${({ theme }) => theme.spacing(15)} 0 !important;

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 !important;
  }
`;

export const DescriptionLeft = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;

  a {
    display: flex;
  }

  p {
    margin: ${({ theme }) => theme.spacing(3)} 0;

    @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
      margin-top: ${({ theme }) => theme.spacing(10)} !important;
    }
  }

  span {
    display: block;
    @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
      display: none;
    }
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    h3 {
      margin-top: ${({ theme }) => theme.spacing(10)} !important;
    }
  }
`;

export const DescriptionRight = styled.div`
  span {
    display: none;
    @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
      display: block;
      margin: ${({ theme }) => theme.spacing(10)} 0 !important;

      a {
        font-size: ${({ theme }) => theme.font.size.medium} !important;
      }
    }
  }
`;

export const Technologies = styled.div`
  ul {
    display: inline-block;
    align-items: flex-start;
    li {
      margin-right: ${({ theme }) => theme.spacing(5)};
      margin-bottom: ${({ theme }) => theme.spacing(5)};
      display: inline-block;

      @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
        margin-right: ${({ theme }) => theme.spacing(2)};
        margin-bottom: ${({ theme }) => theme.spacing(2)};
      }
    }
  }
`;

export const DevicesContainer = styled.div`
  width: 100%;
  position: relative;
`;
