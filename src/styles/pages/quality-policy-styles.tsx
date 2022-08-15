import styled from 'styled-components';

export const PageHeaderContainer = styled.div`
  h2 {
    position: relative;
    z-index: 9;

    @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
      text-align: start;

      span {
        display: block;

        div {
          margin: 0;
          text-align: start;
        }
      }
    }
  }

  svg {
    position: absolute !important;
    z-index: 0;
    right: 0;
    top: 20vh;
  }
`;

export const QualityContent = styled.div`
  p {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;
