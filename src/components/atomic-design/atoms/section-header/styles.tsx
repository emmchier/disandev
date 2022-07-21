import styled from 'styled-components';

export const Content = styled.div`
  span:nth-child(1) {
    display: block;
  }
  b {
    color: ${({ theme }) => theme.color.primary.main};
    font-weight: ${({ theme }) => theme.font.weight.semiBold};
  }
`;
