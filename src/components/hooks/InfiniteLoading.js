import { useState, useEffect } from "react";

export default function useOnScreen(options) {
 
  // State and setter for storing whether element is visible
  const [ref, setRef] = useState(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
   
    if("IntersectionObserver" in window){
     
 
    const observer = new IntersectionObserver(([entry]) => {
      // Update our state when observer callback fires
      setVisible(entry.isIntersecting);
     
    }, options);
    if (ref) {
      observer.observe(ref);
    }
    return () => {
        if(ref){
      observer.unobserve(ref);
        }
    };
  }else{
    setVisible(true);
  }
  }, [ref, options]); // Empty array ensures that effect is only run on mount and unmount

  return [setRef, visible];
}