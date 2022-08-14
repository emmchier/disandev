import styled, { css } from 'styled-components';

interface ContentProps {
  offsetColumn?: boolean;
}

export const Content = styled.div<ContentProps>`
  ${({ offsetColumn }) =>
    offsetColumn
      ? css`
          ul {
            li:nth-child(2) {
              margin-left: 1px !important;
            }
          }
        `
      : css`
          ul {
            li:nth-child(2) {
              margin-left: 0;
            }
          }
        `}

  span {
    height: 200px;

    img {
      object-fit: scale-down;
    }
  }

  h4 {
    margin-top: 0 !important;
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    div:nth-child(1) {
      padding: ${({ theme }) => theme.spacing(2)};
    }
  }
`;
