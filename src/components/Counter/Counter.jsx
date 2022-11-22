import React from "react";
import { useState } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(props.value);
 
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };
  
  return (
    <div>
      <div>Counter: {count}</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
