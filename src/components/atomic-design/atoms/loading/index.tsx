import React, { FC, useEffect, useState } from 'react';
import Link from 'next/link';

import Button from '../button';

import { Content } from './styles';
import SendedMessage from '../sended-message';

interface PropTypes {
  onShowing?: boolean;
  onFinish: number;
}

const Loading: FC<PropTypes> = ({ onShowing, onFinish }) => {
  const [show, setShow] = useState(false);
  const setIsShowing = () => (onShowing === true ? setShow(true) : setShow(false));

  useEffect(() => {
    setIsShowing();
  }, [setShow]);

  return (
    <Content onShowing={show}>
      {onFinish === 200 ? (
        <>
          <SendedMessage message="Tu mensaje fue enviado. En breve nos comunicamos con vos." />
          <Link href="/lets-talk">
            <Button
              onClick={() => setShow(false)}
              ariaLabel="back to form"
              variant="outlined"
              iconLeft={true}
            >
              Send another email
            </Button>
          </Link>
        </>
      ) : (
        <span>Sending...</span>
      )}
    </Content>
  );
};

export default Loading;
