import styled from 'styled-components';

export const MemberRole = styled.h5`
  font-size: ${({ theme }) => theme.font.size.medium};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: ${({ theme }) => theme.color.primary.main};
  margin: 0;
`;

export const SocialMember = styled.div`
  height: ${({ theme }) => theme.spacing(10)};
  width: ${({ theme }) => theme.spacing(10)};
  background: ${({ theme }) => theme.color.gradient.primary};
  border-radius: ${({ theme }) => theme.border.radius.full};
  padding: ${({ theme }) => theme.spacing(3)};
  margin-top: ${({ theme }) => theme.spacing(8)};
  display: flex;
  align-items: center;
  justify-content: center;
`;
