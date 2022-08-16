import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InnerContent = styled.div`
  margin: ${({ theme }) => `${theme.spacing(30)} 0`};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h3 {
    font-size: ${({ theme }) => theme.font.size.largeXXX};
    line-height: ${({ theme }) => theme.font.lineHeight.largeXXX};

    span {
      display: block;
    }

    @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
      font-size: ${({ theme }) => theme.font.size.largeX};
      line-height: ${({ theme }) => theme.font.lineHeight.largeX};
    }
  }

  h4 {
    font-size: ${({ theme }) => theme.font.size.largeX};
    line-height: ${({ theme }) => theme.font.lineHeight.largeX};
    color: ${({ theme }) => theme.color.text.primary};
    margin-top: ${({ theme }) => theme.spacing(5)} !important;

    span:nth-child(2) {
      font-weight: ${({ theme }) => theme.font.weight.regular} !important;
    }

    @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
      span {
        font-size: ${({ theme }) => theme.font.size.largeX};
        line-height: ${({ theme }) => theme.font.lineHeight.largeX};
      }
    }
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    margin: ${({ theme }) => `${theme.spacing(25)} 0`};
  }
`;
