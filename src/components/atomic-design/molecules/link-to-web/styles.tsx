import styled from 'styled-components';

export const Content = styled.div`
  a {
    font-size: ${({ theme }) => theme.font.size.large};
    color: ${({ theme }) => theme.color.primary.main};
    display: flex;
  }
`;
