import { FCC } from '../../../../types';

import { Paragraph } from './styles';

interface TextTypes {
  weight?: string;
  color?: string;
  cap?: string;
}

export const Text: FCC<TextTypes> = ({
  children,
  weight = 'regular',
  color = 'dark',
  cap = 'default',
}) => (
  <Paragraph weight={weight} color={color} cap={cap}>
    {children}
  </Paragraph>
);
