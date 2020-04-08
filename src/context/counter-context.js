import React, { useState, createContext } from "react";

// create Context object
export const CounterContext = createContext();

export const CounterContextProvider = (props) => {
  const [count, setCount] = useState(0);
  console.log("CounterContextProvider...", count);
  return (
    <CounterContext.Provider value={[count, setCount]}>
      {props.children}
    </CounterContext.Provider>
  );
};
