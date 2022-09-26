import React, { FC, useEffect, useState } from 'react';

import Button from '../button';

import { Content, AnimationContainer } from './styles';
import SendedMessage from '../sended-message';
import { useRouter } from 'next/router';
import { ContactGlove } from '../../../ui/svg';

interface PropTypes {
  onShowing?: boolean;
  onFinish: number;
}

const Loading: FC<PropTypes> = ({ onShowing, onFinish }) => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const setIsShowing = () => (onShowing === true ? setShow(true) : setShow(false));

  useEffect(() => {
    setShow(false);
    setIsShowing();
  }, [show]);

  const handleBack = () => {
    setShow(false);
    router.push('/');
  };

  return (
    <Content onShowing={show}>
      {onFinish === 200 ? (
        <>
          <AnimationContainer isLoading={false}>
            <ContactGlove />
            <span>
              <div></div>
              <div></div>
              <div></div>
            </span>
          </AnimationContainer>
          <SendedMessage message="Tu mensaje fue enviado. En breve nos comunicamos con vos." />
          <Button onClick={handleBack} ariaLabel="back to home" variant="outlined" iconLeft={true}>
            Back to home
          </Button>
        </>
      ) : (
        <AnimationContainer isLoading={onShowing}>
          <ContactGlove />
          <span>
            <div></div>
            <div></div>
            <div></div>
          </span>
        </AnimationContainer>
      )}
    </Content>
  );
};

export default Loading;
