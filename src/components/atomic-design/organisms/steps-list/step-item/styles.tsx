import styled, { css } from 'styled-components';

interface ContentProps {
  isBorder?: boolean;
}

export const Content = styled.li<ContentProps>`
  margin: 0 !important;
  padding: 0 !important;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  ${({ isBorder }) =>
    isBorder
      ? css`
          border-left: 1px solid ${({ theme }) => theme.color.text.secondary};
        `
      : css`
          border-left: 1px solid transparent;
        `}

  ul {
    margin: 0;
    padding: 0;

    li {
      margin: 0;
      padding: 0;
      transform: translateY(-20px) translateX(-8px);

      p {
        margin-bottom: ${({ theme }) => theme.spacing(20)};

        @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
          margin-left: ${({ theme }) => theme.spacing(8)} !important;
          margin-bottom: 0 !important;
        }
      }
    }

    li:nth-child(1) {
      span {
        div {
          transform: translateY(16px) !important;
        }
      }
    }

    @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
      li:nth-child(1) {
        span {
          div {
            transform: translateY(16px) !important;
          }
        }
      }
    }
  }

  p {
    margin-left: ${({ theme }) => theme.spacing(20)};
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  span {
    margin-right: ${({ theme }) => theme.spacing(5)};
  }
`;
