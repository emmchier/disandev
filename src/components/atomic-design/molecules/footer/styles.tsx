import styled from 'styled-components';

export const FooterContent = styled.footer`
  width: 100%;
  margin: 0;
  position: relative;
  z-index: 5;

  ul {
    margin-bottom: 0;
  }

  h6 {
    color: ${({ theme }) => theme.color.text.primary};
  }

  p {
    color: ${({ theme }) => theme.color.text.primary};

    span {
      display: block;
      color: ${({ theme }) => theme.color.text.primary};

      @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
        display: inline;
      }
    }
  }
`;

export const FooterMainContent = styled.div`
  border-top: 1px solid ${({ theme }) => theme.color.disabled};
  padding: ${({ theme }) => theme.spacing(13)} 0;

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing(5)} 0;
    margin-top: ${({ theme }) => theme.spacing(15)};
  }
`;

export const BrandContent = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    padding-top: ${({ theme }) => theme.spacing(5)};
    padding-bottom: ${({ theme }) => theme.spacing(10)};
  }
`;

export const InfoContent = styled.div`
  p {
    padding: ${({ theme }) => theme.spacing(2.5)} 0;

    @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
      padding: ${({ theme }) => theme.spacing(1)} 0;
    }
  }

  h6 {
    color: ${({ theme }) => theme.color.primary.main};
    margin-bottom: ${({ theme }) => theme.spacing(4)} !important;

    @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
      font-size: ${({ theme }) => theme.font.size.small};
      line-height: ${({ theme }) => theme.font.lineHeight.small};
    }
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    margin: ${({ theme }) => theme.spacing(7)} 0;
  }
`;

export const IsoContent = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`;

export const CopyContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    margin: 0 ${({ theme }) => theme.spacing(3)};
    color: ${({ theme }) => theme.color.text.secondary};
  }

  a {
    transform: ${({ theme }) => theme.transition};
    color: ${({ theme }) => theme.color.text.secondary};

    p:hover {
      transform: ${({ theme }) => theme.transition};
      color: ${({ theme }) => theme.color.primary.main};
    }
  }
`;

export const NavLeft = styled.div`
  ul {
    li:nth-child(4),
    li:nth-child(5),
    li:nth-child(6) {
      display: none;
    }
  }
`;

export const NavRight = styled.div`
  ul {
    li:nth-child(1),
    li:nth-child(2),
    li:nth-child(3) {
      display: none;
    }

    li:nth-child(4) {
      margin-top: 0;

      @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
        margin-top: ${({ theme }) => theme.spacing(3)};
      }
    }
  }
`;

export const ContactLink = styled.div`
  margin-top: ${({ theme }) => theme.spacing(5)};
  a {
    font-size: ${({ theme }) => theme.font.size.medium};
    color: ${({ theme }) => theme.color.text.primary};

    &:hover {
      color: ${({ theme }) => theme.color.primary.main};
    }
  }
  b {
    font-size: ${({ theme }) => theme.spacing(6)};
    margin: 2px;
    color: ${({ theme }) => theme.color.primary.main};
    font-weight: ${({ theme }) => theme.font.weight.semiBold};
  }
`;

export const CopyrightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing(2)} 0;

  figure,
  svg {
    width: 25px;
    height: 25px;
  }

  ul {
    margin-right: ${({ theme }) => theme.spacing(6)};
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;

    div:nth-child(1) {
      order: 2;
    }
  }
`;

export const Copyright = styled.div`
  background-color: ${({ theme }) => theme.color.background.copy};
  a,
  p {
    font-size: ${({ theme }) => theme.font.size.small};
    line-height: ${({ theme }) => theme.font.lineHeight.small};
    color: ${({ theme }) => theme.color.text.secondary};

    @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
      font-size: ${({ theme }) => theme.font.size.smallX};
      line-height: ${({ theme }) => theme.font.lineHeight.smallX};
    }
  }

  ul {
    margin-bottom: 0 !important;

    @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
      margin-bottom: ${({ theme }) => theme.spacing(10)} !important;

      li {
        &:nth-child(1) {
          margin-left: 0 !important;
        }
        margin-left: ${({ theme }) => theme.spacing(5)} !important;
        svg {
          height: 35px;
          width: 35px;
          filter: brightness(0) saturate(100%) invert(31%) sepia(65%) saturate(3626%)
            hue-rotate(237deg) brightness(100%) contrast(89%) !important;
        }
        &:nth-child(5) {
          margin-right: 0 !important;
        }
      }
    }
  }

  @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${({ theme }) => theme.spacing(6)} 0;
  }
`;
