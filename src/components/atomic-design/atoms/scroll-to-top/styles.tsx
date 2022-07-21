import styled from 'styled-components';

interface ScrollButtonPropTypes {
  isShowing?: boolean;
}

export const ScrollButton = styled.button<ScrollButtonPropTypes>`
  width: ${({ theme }) => theme.spacing(10)};
  height: ${({ theme }) => theme.spacing(10)};
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: ${({ theme }) => theme.shadow.main};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(2)};
  position: fixed;
  z-index: 99;
  bottom: 0;
  cursor: pointer;
  transition: all 0.5s ease 0s;
  -moz-transition: all 0.5s ease 0s;
  -webkit-transition: all 0.5s ease 0s;
  -o-transition: all 0.5s ease 0s;
  right: 0;
  margin: ${({ theme }) => theme.spacing(2)};
  border-radius: ${({ theme }) => theme.border.radius.full};
  animation: ${({ isShowing }) =>
    isShowing ? 'fadeIn .6s ease-in-out;' : 'fadeOut .6s ease-in-out;'};
  -webkit-overflow-scrolling: touch;

  &:hover {
    transition: all 0.5s ease 0s;
    -moz-transition: all 0.5s ease 0s;
    -webkit-transition: all 0.5s ease 0s;
    -o-transition: all 0.5s ease 0s;
    background-color: ${({ theme }) => theme.color.hoverButton};
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    margin: ${({ theme }) => theme.spacing(4)};
  }
`;
