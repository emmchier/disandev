import React, { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { Button, Heading, Text } from '../../atoms';
import { ContactGlove } from '../../../ui/svg';

import { Content, AnimationContainer, SendedMessage } from './styles';

interface PropTypes {
  onShowing?: boolean;
  onFinish: number;
}

export const Loading: FC<PropTypes> = ({ onShowing, onFinish }) => {
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
      <>
        <AnimationContainer isLoading={onFinish === 200 ? false : true}>
          <ContactGlove />
          <span>
            <div></div>
            <div></div>
            <div></div>
          </span>
        </AnimationContainer>
        <Heading variant="h5" weight="light">
          {onFinish === 200 ? 'Message Sent' : 'Sending...'}
        </Heading>
        <SendedMessage isSended={onFinish === 200 ? true : false}>
          <Text weight="bold">We will contact soon.</Text>
          <Button onClick={handleBack} ariaLabel="back to home" variant="outlined" iconLeft={true}>
            Back to home
          </Button>
        </SendedMessage>
      </>
    </Content>
  );
};
