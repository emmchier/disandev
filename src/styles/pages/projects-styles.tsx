import styled from 'styled-components';

export const ProjectsContent = styled.div`
  section {
    padding-bottom: ${({ theme }) => theme.spacing(40)};
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
  }

  svg {
    position: absolute;
    top: 5%;
    left: 0;
    transform: rotate(-10deg);
  }
`;
