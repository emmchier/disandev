import styled from 'styled-components';

export const Content = styled.div`
  ul {
    li {
      @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
        svg {
          margin-right: ${({ theme }) => theme.spacing(5)};
          width: ${({ theme }) => theme.spacing(8)};
          height: ${({ theme }) => theme.spacing(8)};
        }

        &:nth-child(3) {
          transform: translateY(3px);
        }

        &:nth-child(5) {
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
