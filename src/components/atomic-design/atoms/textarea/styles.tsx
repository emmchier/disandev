import styled from 'styled-components';

export const Content = styled.div`
  padding-bottom: ${({ theme }) => theme.spacing(5)};

  &:focus-within label {
    color: ${({ theme }) => theme.color.primary.main};
  }
`;

export const TextareaField = styled.textarea`
  resize: none;
  width: 100%;
  overflow-y: auto;
  margin: 0;
  color: ${({ theme }) => theme.color.black};
  font-style: normal;
  font-weight: ${({ theme }) => theme.font.weight.regular};
  font-size: ${({ theme }) => theme.font.size.small};
  background-color: ${({ theme }) => theme.color.white};
  text-indent: ${({ theme }) => theme.spacing(3)};
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.color.black};
  padding-top: ${({ theme }) => theme.spacing(3)};

  &:focus {
    color: ${({ theme }) => theme.color.primary.main};
    border-bottom: 2px solid ${({ theme }) => theme.color.primary.main};
    background-color: ${({ theme }) => theme.color.white};
    outline: none;
  }

  ::-webkit-scrollbar {
    width: ${({ theme }) => theme.spacing(5)};
  }

  ::-webkit-scrollbar-track {
    border-radius: ${({ theme }) => theme.spacing(5)};
  }

  ::-webkit-scrollbar-thumb {
    border-radius: ${({ theme }) => theme.spacing(5)};
    background-color: ${({ theme }) => theme.color.white};
  }

  ::-webkit-scrollbar-thumb:window-inactive {
    background-color: ${({ theme }) => theme.color.white};
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
