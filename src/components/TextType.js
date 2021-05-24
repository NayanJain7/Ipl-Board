import React, { useRef, useEffect } from "react";
import Typed from "typed.js";

const TextType = () => {
  const typeTarget = useRef(null);

 
  useEffect(() => {
    const typed = new Typed(typeTarget.current, {
      strings: ["Browse your favourite team!","See your favourite team's records ","See your favourite team's performance "],
      typeSpeed:80,
      backSpeed:90,
      loop: true,
      
    },[]);

    return () => {
      typed.destroy();
    };
  }, []);

  return <h1><span ref={typeTarget} /></h1>;
  
};

export default TextType;