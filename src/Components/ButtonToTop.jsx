import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import "./ButtonToTop.css"
import { useState, useEffect } from 'react';


const ButtonScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const threshold = 500; 

    setIsVisible(scrollTop > threshold);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <KeyboardArrowUpIcon onClick={scrollToTop} className="buttonTop" />
      )}
    </div>
  );
};

export default ButtonScrollToTop;

