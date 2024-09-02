import { MouseEventHandler, useEffect, useRef, useState } from 'react';

const useOnClickOutsideDropdown = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [ showDropdown, setShowDropdown ] = useState(false);

  const handleClick: MouseEventHandler<HTMLDivElement> = (): void => {
    setShowDropdown(true);
  };

  useEffect(() => {
    const onClickOutside = (event: any) => {
      // If click event originated outside dropdown container element,
      // set showDropdown to false
      if (showDropdown && !containerRef.current?.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => {
      document.removeEventListener('mousedown', onClickOutside);
    }
  }, [showDropdown]);

  return {
    showDropdown,
    handleClick,
    containerRef,
  }
};

export default useOnClickOutsideDropdown;
