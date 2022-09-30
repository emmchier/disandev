import { FCC } from '../../../../types';

import { Heading } from '../../atoms';

import { Content } from './styles';

interface SectionHeaderTypes {
  variant?: string;
  cap?: string;
}

export const SectionHeader: FCC<SectionHeaderTypes> = ({
  children,
  variant = 'h3',
  cap = 'default',
}) => (
  <Content>
    <Heading variant={variant} cap={cap}>
      {children}
    </Heading>
  </Content>
);
