import React, { FC, useEffect, useState } from 'react';
import { Content } from './styles';

const LoadingPage: FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return <Content isLoading={loading}>LoadingPage</Content>;
};

export default LoadingPage;
