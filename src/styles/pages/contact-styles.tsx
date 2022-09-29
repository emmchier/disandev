import styled from 'styled-components';

export const ContactCol = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  position: relative;

  h3,
  h5 {
    span {
      display: block;
    }
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    height: auto;
  }
`;

export const BackButtonContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing(20)};
  position: absolute;
  z-index: 99;
`;

export const ActionBack = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(10)};

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: ${({ theme }) => theme.spacing(15)};
  }
`;

export const TextContent = styled.div`
  margin-left: ${({ theme }) => theme.spacing(10)};

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    margin-left: 0;

    h3 {
      font-weight: ${({ theme }) => theme.font.weight.light};
      span {
        display: inline;
        font-weight: ${({ theme }) => theme.font.weight.light};
      }
    }

    h5 {
      font-size: ${({ theme }) => theme.font.size.small};
      line-height: ${({ theme }) => theme.font.lineHeight.smallX};
      span {
        font-size: ${({ theme }) => theme.font.size.small};
        line-height: ${({ theme }) => theme.font.lineHeight.smallX};
      }
    }
  }
`;

export const SendContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  transform: translateX(-150px);

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    transform: translateX(-30px);
    margin-top: ${({ theme }) => theme.spacing(8)};
    margin-bottom: ${({ theme }) => theme.spacing(15)};

    img {
      height: ${({ theme }) => theme.spacing(25)} !important;
    }
  }
`;
