import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  //@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');
  body,
  html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
    font-family: ${({ theme }) => theme.font.family};
    font-size: ${({ theme }) => theme.font.size.small};
    line-height: ${({ theme }) => theme.font.lineHeight.small};

    @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
      font-size: ${({ theme }) => theme.font.size.medium};
      line-height: ${({ theme }) => theme.font.lineHeight.medium};
    }
  }
  * {
    text-decoration: none;
    list-style: none;
  }
  ul {
    padding: 0;
  }
  p {
    color: ${({ theme }) => theme.color.black};
  }
  a {
    list-style: none;
    text-decoration: none;
    color: ${({ theme }) => theme.color.black};
  }
  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;
