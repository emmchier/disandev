import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    text-align: center;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: ${({ theme }) => theme.font.weight.regular} !important;
      color: ${({ theme }) => theme.color.black} !important;

      @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
        font-size: ${({ theme }) => theme.font.size.large};
        line-height: ${({ theme }) => theme.font.lineHeight.medium};
      }
    }
  }

  b:nth-child(1) {
    color: ${({ theme }) => theme.color.black};
  }
  b:nth-child(2) {
    color: ${({ theme }) => theme.color.black};
  }

  span:nth-child(2) {
    color: ${({ theme }) => theme.color.black};
  }
`;
