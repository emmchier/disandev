import styled from 'styled-components';

export const Content = styled.div`
  img {
    opacity: 0.7 !important;
  }
  p {
    color: ${({ theme }) => theme.color.primary.main};
    margin-top: ${({ theme }) => theme.spacing(2)};
    font-size: ${({ theme }) => theme.font.size.small};
  }
`;
