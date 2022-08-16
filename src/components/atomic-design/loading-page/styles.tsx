import styled, { css } from 'styled-components';

interface PropTypes {
  isLoading?: boolean;
}

export const Content = styled.div<PropTypes>`
  opacity: 1;
  ${({ isLoading }) =>
    isLoading === true
      ? css`
          opacity: 1;
          transition: all 0.2s ease-in;
          position: fixed;
          z-index: 999999999;
        `
      : css`
          opacity: 0;
          transition: all 0.2s ease-in;
          position: fixed;
          z-index: 0 !important;
        `}
  background-color: ${({ theme }) => theme.color.white};
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
