import { useState, useEffect } from 'react';

const useIntersectionObserver = (callback, options) => {
  const [target, setTarget] = useState(null);

  useEffect(() => {
    if (!target) return;

    const observer = new IntersectionObserver((entries, observerInstance) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          callback(entry);
          observerInstance.unobserve(entry.target);
        }
      });
    }, options);

    observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, [target, callback, options]);

  return setTarget;
};

export default useIntersectionObserver;
