import styled from 'styled-components';

export const ActionContent = styled.div`
  button {
    margin: ${({ theme }) => theme.spacing(10)} 0 !important;
  }
`;

export const MainInfoContent = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(20)} !important;
  h2 {
    color: ${({ theme }) => theme.color.black};
    width: 70%;

    @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
      width: 100%;
    }
  }

  h5 {
    width: 50%;
    margin: ${({ theme }) => theme.spacing(5)} 0 !important;

    @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
      width: 100%;
    }
  }
`;

export const PaddingContent = styled.div`
  padding: ${({ theme }) => theme.spacing(15)} 0 !important;
`;

export const DescriptionLeft = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;

  p {
    margin: ${({ theme }) => theme.spacing(3)} 0;
  }

  span {
    display: block;
    @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
      display: none;
    }
  }
`;

export const DescriptionRight = styled.div`
  span {
    display: none;
    @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
      display: block;
    }
  }
`;

export const Technologies = styled.div`
  ul {
    display: inline-block;
    align-items: flex-start;
    li {
      margin-left: 0;
      margin-bottom: 0;
      display: inline-block;
    }
  }
`;
