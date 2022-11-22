import React from "react";
import { useEffect, useState } from "react";

const Greeting = () => {

  const [name, setName] = useState("Hola Euralio");
  useEffect(() => {
    setTimeout(() => {
      setName("Hola Alfonsina");
    }, 3000);
  }, []);

  return (
    <div>
      <p>{name}</p>
    </div>
  );
};

export default Greeting;
