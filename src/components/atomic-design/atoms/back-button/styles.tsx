import styled from 'styled-components';

export const Content = styled.div`
  button {
    color: ${({ theme }): string => theme.color.primary.main} !important;

    svg {
      filter: brightness(0) saturate(100%) invert(37%) sepia(62%) saturate(1324%) hue-rotate(221deg)
        brightness(91%) contrast(107%) !important;
    }

    &:hover {
      svg {
        filter: brightness(0) saturate(100%) invert(37%) sepia(62%) saturate(1324%)
          hue-rotate(221deg) brightness(91%) contrast(107%) !important;
      }
    }
  }
`;
