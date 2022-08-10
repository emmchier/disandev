import styled from 'styled-components';

export const PageHeaderContainer = styled.div`
  position: relative;

  h2 {
    position: relative;
    z-index: 1;
  }

  svg {
    position: absolute;
    top: 21%;
    left: -18%;
  }
`;

export const MembersContent = styled.div`
  margin: ${({ theme }) => theme.spacing(30)} 0;
`;

export const OurValuesContent = styled.div`
  background: ${({ theme }) => theme.color.gradient.primary};
  padding: ${({ theme }) => theme.spacing(20)} 0 ${({ theme }) => theme.spacing(15)};
  margin: ${({ theme }) => theme.spacing(30)} 0;

  section {
    background-color: transparent;
    position: relative;

    ul {
      margin: 0;
    }

    p {
      width: 95%;
    }

    p:nth-child(1) {
      margin-bottom: ${({ theme }) => theme.spacing(8)};
    }
  }
`;

export const OurValuesImage = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  position: absolute;
  transform: translateY(100px);

  img {
    height: ${({ theme }) => theme.spacing(48)};
  }
`;
