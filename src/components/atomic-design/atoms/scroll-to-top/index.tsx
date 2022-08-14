import React, { FC, useEffect, useState } from 'react';

import Icon from '../icon';

import { ScrollButton } from './styles';

const ScrollToTop: FC = () => {
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 700) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  return (
    <>
      {isVisible && (
        <ScrollButton onClick={scrollToTop} aria-label="scroll to top" isShowing={isVisible}>
          <Icon ariaLabel="Arrow to top icon" icon="arrow" direction="up" />
        </ScrollButton>
      )}
    </>
  );
};

export default ScrollToTop;
