import React from "react";
import { useState } from "react";

const Counter = (props) => {
  let [count, setCount] = useState(props.value);
  const [valor, setValor] = useState(props.value);

  const increment = () => {
    setCount(count += parseInt(valor));
  };

  const decrement = () => {
    setCount(count -= parseInt(valor));
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
      <div>Counter: {count}</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
      <br />
      <span>
        Set counter:{" "}
        <input type="number" value={count} onChange={handleChange} />{" "}
      </span>
      <br />
      <span>
        Set value increment:{" "}
        <input type="number" value={valor} onChange={handleChangeValue} />
      </span>
    </div>
  );
};

export default Counter;
