import styled, { css } from 'styled-components';

type ContentPropTypes = {
  onShowing: boolean;
};

export const Content = styled.div<ContentPropTypes>`
  background-color: ${({ theme }) => theme.color.white};
  width: 100%;
  height: 100vh;
  position: fixed;
  opacity: 0;
  top: 0;
  display: flex;
  z-index: 99999999999;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${({ onShowing }) =>
    onShowing === true
      ? css`
          opacity: 1;
          display: flex;
        `
      : css`
          opacity: 0;
          display: none;
        `}
`;
