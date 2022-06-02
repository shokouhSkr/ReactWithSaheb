// here we write repetetive codes in couple files
// we CAN'T use hooks in 3 places: in for loop, if statment, function

import { useState } from "react";

const WithCounter = (WrappedComponent, incrementValue) => {
  const UpdatedComponent = (props) => {
    // place for count, increment, ... and any repetetive codes
    const [count, setCount] = useState(0);
    const incrementCount = () => {
      setCount(count + incrementValue);
    };
    return (
      <WrappedComponent
        count={count}
        incrementCount={incrementCount}
        {...props} // name این یعنی هر پراپز دیگه از هر جای دیگه ای که داری بهش پاس بده مثل همون
      />
    );
  };

  return UpdatedComponent;
};

export default WithCounter;
