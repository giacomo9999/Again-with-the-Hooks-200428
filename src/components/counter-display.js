import React, { useContext } from "react";
import { CounterContext } from "../context/counter-context";

export default function CounterDisplay() {
  const [count] = useContext(CounterContext);
  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}
