import styled from 'styled-components';

export const Content = styled.div`
  width: 70%;

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  padding-top: ${({ theme }) => theme.spacing(10)};

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
    margin-bottom: ${({ theme }) => theme.spacing(15)};
  }
`;

export const ContentField = styled.div`
  position: relative;
  padding-top: ${({ theme }) => theme.spacing(10)};

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    padding-top: ${({ theme }) => theme.spacing(5)};
    label {
      font-size: ${({ theme }) => theme.font.size.small};
    }

    input,
    textarea {
      font-size: ${({ theme }) => theme.font.size.medium};
      margin-bottom: ${({ theme }) => theme.spacing(2)};
    }
  }
`;

export const Error = styled.p`
  color: ${({ theme }) => theme.color.text.error};
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0;
  transform: translateY(10px);

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.font.size.smallX};
  }
`;

export const TextareaContainer = styled.span`
  p {
    transform: translateY(20px);
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: ${({ theme }) => theme.spacing(5)};
  }
`;
