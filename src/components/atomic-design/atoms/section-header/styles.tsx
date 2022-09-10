import styled from 'styled-components';

export const Content = styled.div`
  position: relative;
  z-index: 1;
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    div {
      color: ${({ theme }) => theme.color.black};
      font-weight: ${({ theme }) => theme.font.weight.semiBold};
      margin-left: ${({ theme }) => theme.spacing(3)};

      @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
        display: inline !important;
        margin-left: ${({ theme }) => theme.spacing(1)} !important;
      }
    }

    @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
      display: inline !important;
    }
  }

  h1,
  h2 {
    font-weight: ${({ theme }) => theme.font.weight.light};
    span {
      font-weight: ${({ theme }) => theme.font.weight.light};
    }
  }

  b {
    color: ${({ theme }) => theme.color.primary.main} !important;
    font-weight: ${({ theme }) => theme.font.weight.semiBold};

    @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
      display: inline !important;
    }
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    h1,
    h2 {
      font-size: ${({ theme }) => theme.font.size.largeX} !important;
      font-weight: ${({ theme }) => theme.font.weight.light} !important;
      line-height: ${({ theme }) => theme.font.lineHeight.large} !important;
      span {
        font-size: ${({ theme }) => theme.font.size.largeX} !important;
        font-weight: ${({ theme }) => theme.font.weight.light} !important;
        line-height: ${({ theme }) => theme.font.lineHeight.large} !important;
      }
      b {
        font-size: ${({ theme }) => theme.font.size.largeX} !important;
        line-height: ${({ theme }) => theme.font.lineHeight.large} !important;
      }
    }
  }
`;
