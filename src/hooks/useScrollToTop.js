import { useEffect, useState } from 'react';

const useScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleScroll = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;

    const threshold = window.innerWidth <= 768 ? 50 : 100;

    setIsVisible(scrollTop > threshold);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { isVisible, scrollToTop };
};
export default useScrollToTop;
