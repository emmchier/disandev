import styled from 'styled-components';

export const Content = styled.div`
  padding-bottom: ${({ theme }) => theme.spacing(5)};
  width: 100%;

  &:focus-within label {
    color: ${({ theme }) => theme.color.primary.main};
  }
`;

export const InputField = styled.input`
  width: 100%;
  overflow: hidden;
  color: ${({ theme }) => theme.color.black};
  padding-left: ${({ theme }) => theme.spacing(5)};
  font-style: normal;
  font-weight: ${({ theme }) => theme.font.weight.regular};
  font-size: ${({ theme }) => theme.font.size.small};
  line-height: ${({ theme }) => theme.spacing(10)};
  /* text-indent: ${({ theme }) => theme.spacing(3)}; */
  padding: 0;
  background-color: ${({ theme }) => theme.color.white};
  border: transparent;
  border-bottom: 2px solid ${({ theme }) => theme.color.black};

  &:focus {
    border-bottom: 2px solid ${({ theme }) => theme.color.primary.main};
    background-color: ${({ theme }) => theme.color.white};
    outline: none;
  }

  /* @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
    line-height: ${({ theme }) => theme.spacing(25)};
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    line-height: ${({ theme }) => theme.spacing(25)};
  } */
`;

export const Label = styled.label`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  font-style: normal;
  font-weight: ${({ theme }) => theme.font.weight.regular};
  font-size: ${({ theme }) => theme.font.size.small};
  color: ${({ theme }) => theme.color.black};
`;
