import React, { useContext } from "react";
import { CounterContext } from "../context/counter-context";

export default function CounterButtons() {
  const [count, setCount] = useContext(CounterContext);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <button background-color="red" onClick={decrement}>
        SUBTRACT
      </button>
      <button background-color="green" onClick={increment}>
        ADD
      </button>
    </div>
  );
}
