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

    @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
      font-size: ${({ theme }) => theme.font.size.largeXX};
      line-height: ${({ theme }) => theme.font.lineHeight.largeXX};
    }
  }

  h4 {
    font-size: ${({ theme }) => theme.font.size.largeX};
    line-height: ${({ theme }) => theme.font.lineHeight.largeX};
    color: ${({ theme }) => theme.color.text.primary};

    span:nth-child(2) {
      font-weight: ${({ theme }) => theme.font.weight.regular} !important;
    }

    @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
      font-size: ${({ theme }) => theme.font.size.large};
      line-height: ${({ theme }) => theme.font.lineHeight.large};
    }
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    margin: ${({ theme }) => `${theme.spacing(15)} 0`};
  }
`;
