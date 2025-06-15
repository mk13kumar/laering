import React, { useEffect, useState } from "react";
function useCounter() {
  const [count, setCount] = useState(5);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const handleIncrement = () => {
   
      setCount(count + 1);
    

  };
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return { count, handleIncrement, handleDecrement };
}

export default useCounter;
