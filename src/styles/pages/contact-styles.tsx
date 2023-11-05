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
    display: block;
  }
`;

export const BackButtonContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing(20)};
  position: absolute;
  z-index: 99;
`;

export const ActionBack = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(50)};

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: ${({ theme }) => theme.spacing(15)};
    margin-bottom: ${({ theme }) => theme.spacing(10)};
  }
`;

export const TextContent = styled.div`
  margin-left: ${({ theme }) => theme.spacing(10)};

  button {
    padding: 0;
    margin: 0;
    margin: ${({ theme }) => theme.spacing(10)} 0;
    border: 0;
    transform: translateX(-10px);
    font-size: ${({ theme }) => theme.font.size.largeX} !important;
    font-weight: ${({ theme }) => theme.font.weight.bold};
    color: ${({ theme }) => theme.color.primary.main} !important;

    &:hover {
      color: ${({ theme }) => theme.color.primary.dark} !important;
    }
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    margin-left: 0;

    h3 {
      font-weight: ${({ theme }) => theme.font.weight.light};

      span {
        font-weight: ${({ theme }) => theme.font.weight.light};
        display: inline;
      }
    }

    h5 {
      font-size: ${({ theme }) => theme.font.size.small};
      line-height: ${({ theme }) => theme.font.lineHeight.smallX};
      display: inline;

      span {
        font-size: ${({ theme }) => theme.font.size.small};
        line-height: ${({ theme }) => theme.font.lineHeight.smallX};
        display: inline;
      }
    }

    button {
      margin: ${({ theme }) => theme.spacing(15)} 0;
      font-size: ${({ theme }) => theme.font.size.smallX} !important;
      font-weight: ${({ theme }) => theme.font.weight.bold};
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
    margin-bottom: ${({ theme }) => theme.spacing(15)};

    img {
      height: ${({ theme }) => theme.spacing(25)} !important;
      width: ${({ theme }) => theme.spacing(25)} !important;
    }
  }
`;
