import React from 'react';

import { Content, Title1, Title2, Title3, Title4, Title5, Title6 } from './styles';

type HeadingI = {
  children: React.ReactNode;
  variant?: string;
  weight?: string;
  color?: string;
  cap?: string;
};

const Heading = ({
  children,
  variant = 'h3',
  weight = 'bold',
  color = 'default',
  cap = 'default',
}: HeadingI) => {
  const setHeading = () => {
    switch (variant) {
      case 'h1':
        return <Title1>{children}</Title1>;
      case 'h2':
        return <Title2>{children}</Title2>;
      case 'h3':
        return <Title3>{children}</Title3>;
      case 'h4':
        return <Title4>{children}</Title4>;
      case 'h5':
        return <Title5>{children}</Title5>;
      case 'h6':
        return <Title6>{children}</Title6>;
      default:
        return <Title3>{children}</Title3>;
    }
  };
  return (
    <Content variant={variant} weight={weight} color={color} cap={cap}>
      {setHeading()}
    </Content>
  );
};

export default Heading;
