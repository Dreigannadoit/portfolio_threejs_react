import React, { useEffect, useRef, useState } from 'react';

const Scroll = () => {
  const [isVisible, setIsVisible] = useState(false);
  const targetElementRef = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null, 
      threshold: 0.5, 
    });

    if (targetElementRef.current) {
      observer.observe(targetElementRef.current);
    }

    // Clean up the observer when the component unmounts
    return () => {
      if (targetElementRef.current) {
        observer.unobserve(targetElementRef.current);
      }
    };
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  return (
    <div className='h-screen'>
      <div
        ref={targetElementRef}
        className={`your-content ${isVisible ? 'show' : ''} h-[90px] w-[90px] bg-white`}
      >
      </div>
    </div>
  );
};

export default Scroll;