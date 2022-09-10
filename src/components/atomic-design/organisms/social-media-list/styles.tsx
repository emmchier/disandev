import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  align-items: center;

  figure {
    div {
      width: ${({ theme }) => theme.spacing(6)};
      height: ${({ theme }) => theme.spacing(6)};
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  ul {
    li {
      @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
        figure {
          div {
            width: ${({ theme }) => theme.spacing(8)};
            height: ${({ theme }) => theme.spacing(8)};
            svg {
              width: ${({ theme }) => theme.spacing(8)};
              height: ${({ theme }) => theme.spacing(8)};
            }
          }
        }

        svg:last-child {
          margin-right: 0;
        }
      }
    }

    @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }
  }
`;
