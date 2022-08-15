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

export const Copyright = styled.div`
  background-color: ${({ theme }) => theme.color.background.copy};
  padding: ${({ theme }) => theme.spacing(5)} 0 ${({ theme }) => theme.spacing(2)};

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing(6)} 0;
  }
`;

export const CopyrightContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  svg {
    filter: brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(7500%) hue-rotate(327deg)
      brightness(96%) contrast(104%);

    &:hover {
      filter: brightness(0) saturate(100%) invert(50%) sepia(78%) saturate(6355%) hue-rotate(235deg)
        brightness(99%) contrast(91%);
    }
  }

  p {
    font-size: ${({ theme }) => theme.font.size.small};
  }

  @media only screen and (${({ theme }) => theme.breakpoints.tabletLandscape}) {
    ul {
      transform: translateX(-30px);
    }
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;

    ul {
      transform: translateX(0);
    }

    li {
      svg {
        filter: brightness(0) saturate(100%) invert(50%) sepia(78%) saturate(6355%)
          hue-rotate(235deg) brightness(99%) contrast(91%);
      }
    }

    li:nth-child(4) {
      figure {
        svg {
          margin-right: 0 !important;
        }
      }
    }

    p {
      order: 2;
      margin-top: ${({ theme }) => theme.spacing(5)};
      display: flex;
      align-items: center;
      width: 100%;
    }
  }
`;
