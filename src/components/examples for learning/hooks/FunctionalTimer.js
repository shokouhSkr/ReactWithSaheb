import React, { useState, useEffect } from "react";

const FunctionalTimer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("hi saheb");
      setCount(count + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div>this is timer</div>;
};

export default FunctionalTimer;
