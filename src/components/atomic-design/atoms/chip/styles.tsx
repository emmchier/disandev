import styled from 'styled-components';

export const Content = styled.div`
  font-size: ${({ theme }) => theme.font.size.small};
  line-height: ${({ theme }) => theme.font.lineHeight.small};
  padding: ${({ theme }) => `${theme.spacing(2)} ${theme.spacing(5)}`};
  background-color: ${({ theme }) => theme.color.background.tag};
  color: ${({ theme }) => theme.color.text.tag};
  border-radius: ${({ theme }) => theme.border.radius.full};

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.font.size.smallX};
    line-height: ${({ theme }) => theme.font.lineHeight.smallXX};
  }
`;
