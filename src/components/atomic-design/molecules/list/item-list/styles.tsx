import styled from 'styled-components';

export const Item = styled.li`
  padding: 0;
  margin: 0;
  color: ${({ theme }) => theme.color.text.primary};

  a {
    color: ${({ theme }) => theme.color.text.primary};
    &::active,
    &:focus {
      color: ${({ theme }) => theme.color.text.primary};
    }
  }
`;
