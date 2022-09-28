import styled from 'styled-components';

export const Content = styled.div`
  width: 70%;

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    width: 70%;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: ${({ theme }) => theme.spacing(5)};

  button:last-child {
    background: transparent;
    border: 1px solid transparent;
    color: ${({ theme }) => theme.color.text.primary};

    &:hover {
      color: ${({ theme }) => theme.color.black};
    }

    &:disabled {
      visibility: hidden;
    }
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    button {
      display: block;
      width: 100%;
    }
  }
`;

export const ContentField = styled.div`
  position: relative;

  input,
  textarea {
    margin-bottom: ${({ theme }) => theme.spacing(10)};
  }
`;

export const Error = styled.p`
  color: ${({ theme }) => theme.color.text.error};
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0;
  transform: translateY(10px);
`;

export const TextareaContainer = styled.span`
  p {
    transform: translateY(20px);
  }
`;
