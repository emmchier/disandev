import styled from 'styled-components';

interface ContentI {
  auto?: boolean;
  color?: string;
  padding?: string;
}

const Content = styled.section<ContentI>`
  height: ${({ auto }) => (auto ? 'auto' : '100vh')};
  width: 100%;
  ${({ padding }) => `padding${padding}` || `:0`};
  margin: 0;
`;

export default Content;
