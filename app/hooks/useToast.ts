import { useState } from 'react';

const useToast = () => {
  const [isVisible, setIsVisible] = useState(false);

  const showToast = () => {
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 5000);
  };

  return { isVisible, showToast };
};

export default useToast;
