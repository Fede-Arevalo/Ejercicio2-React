import React from "react";
import { useState } from "react";

const Counter = (props) => {
  let [count, setCount] = useState(props.value);
  const [valor, setValor] = useState(props.value);

  const increment = () => {
    setCount((count += parseInt(valor)));
  };

  const decrement = () => {
    setCount((count -= parseInt(valor)));
  };

  const reset = () => {
    setCount(0);
  };

  const handleChange = (event) => {
    setCount(event.target.value);
  };

  const handleChangeValue = (event) => {
    setValor(event.target.value);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
      <br />
      <br />
      <p>Set counter:</p>
      <input type="number" value={count} onChange={handleChange} />
      <br />
      <br />
      <p>Set value increment:</p>
      <input type="number" value={valor} onChange={handleChangeValue} />
    </div>
  );
};

export default Counter;
