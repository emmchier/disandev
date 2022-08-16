import styled from 'styled-components';

export const ProjectsContent = styled.div`
  section {
    @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
      padding-bottom: ${({ theme }) => theme.spacing(10)};
    }
  }
`;

export const PageHeaderContainer = styled.div`
  position: relative;

  h2 {
    position: relative;
    z-index: 9;

    @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
      text-align: start;

      span {
        display: block;

        div {
          margin: 0;
          display: block;
          text-align: start;
        }
      }
    }
  }

  svg {
    position: absolute;
    top: 5%;
    left: 0;
    transform: rotate(-10deg);
  }
`;
