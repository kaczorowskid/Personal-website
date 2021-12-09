import React, { useEffect, useState } from 'react';

export const useScrollValue = () => {

  const [scrollValue, setScrollValue] = useState<number>(0);

  const checkScroll = () => setScrollValue(window.scrollY);

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, [])

  return {
    scrollValue
  }
}