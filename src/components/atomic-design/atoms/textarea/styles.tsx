import styled from 'styled-components';

export const Content = styled.div`
  /* padding-bottom: ${({ theme }) => theme.spacing(5)}; */
  padding: 0;

  &:focus-within label {
    color: ${({ theme }) => theme.color.primary.main};
  }
`;

export const TextareaField = styled.textarea`
  resize: none;
  width: 100%;
  margin: 0;
  padding: 0;
  max-height: ${({ theme }) => theme.spacing(40)};
  transition: ${({ theme }) => theme.transition.main};
  color: ${({ theme }) => theme.color.black};
  font-style: normal;
  font-weight: ${({ theme }) => theme.font.weight.regular};
  font-size: ${({ theme }) => theme.font.size.small};
  background-color: ${({ theme }) => theme.color.white};
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.color.black};

  &:focus {
    border-bottom: 2px solid ${({ theme }) => theme.color.primary.main};
    background-color: ${({ theme }) => theme.color.white};
    /* padding: ${({ theme }) => theme.spacing(3)} 0; */
    outline: none;
  }

  ::-webkit-scrollbar {
    width: ${({ theme }) => theme.spacing(2.5)};
    cursor: pointer;
  }

  ::-webkit-scrollbar-track {
    border-radius: ${({ theme }) => theme.spacing(5)};
  }

  ::-webkit-scrollbar-thumb {
    border-radius: ${({ theme }) => theme.spacing(5)};
    background-color: ${({ theme }) => theme.color.disabled};
    cursor: pointer;
  }

  ::-webkit-scrollbar-thumb:window-inactive {
    background-color: ${({ theme }) => theme.color.disabled};
    cursor: pointer;
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  font-style: normal;
  font-weight: ${({ theme }) => theme.font.weight.regular};
  font-size: ${({ theme }) => theme.font.size.small};
  color: ${({ theme }) => theme.color.black};
`;
