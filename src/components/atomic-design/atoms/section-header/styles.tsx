import styled from 'styled-components';

export const Content = styled.div`
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    div {
      color: ${({ theme }) => theme.color.black};
      font-weight: ${({ theme }) => theme.font.weight.semiBold};
      margin-left: ${({ theme }) => theme.spacing(3)};
    }
  }

  b {
    color: ${({ theme }) => theme.color.primary.main} !important;
    font-weight: ${({ theme }) => theme.font.weight.semiBold};
  }
`;
