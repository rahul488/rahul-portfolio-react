import { useEffect } from 'react';

const useClickOutSide = (ref, callback) => {
  const handleClick = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      document.addEventListener('click', handleClick);
    }, 100);

    return () => {
      clearTimeout(timeOut);
      document.removeEventListener('click', handleClick);
    };
  }, [ref, callback]);
};

export default useClickOutSide;
