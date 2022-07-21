import styled from 'styled-components';

export const Content = styled.div`
  cursor: pointer;

  &:hover {
    background-color: transparent;
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    transform: translateX(8px);
  }

  span {
    ul {
      margin-bottom: ${({ theme }) => theme.spacing(2)};

      @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
        margin-bottom: ${({ theme }) => theme.spacing(1)};
      }
    }
    li {
      &:nth-child(3) {
        margin-right: 0 !important;
      }

      @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
        margin-right: ${({ theme }) => theme.spacing(1)};
      }
    }
  }

  span:nth-child(3) {
    ul {
      margin-bottom: 0 !important;
    }
  }
`;

export const Span = styled.span``;
