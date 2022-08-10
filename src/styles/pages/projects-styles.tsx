import styled from 'styled-components';

export const ProjectsContent = styled.div`
  section {
    padding-bottom: ${({ theme }) => theme.spacing(40)};
    @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
      padding-bottom: ${({ theme }) => theme.spacing(10)};
    }
  }
`;
