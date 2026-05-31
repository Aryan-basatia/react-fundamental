import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }
  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
  }
  function resetCount() {
    setCount(0);
  }

  return (
    <>
      <h2>{count}</h2>
      <button onClick={() => incrementCount()}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
      <button onClick={resetCount}>Reset</button>
    </>
  );
}
