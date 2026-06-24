import { useCallback, useMemo, useState } from "react";
import Child from "./Child";

const arr = Array.from({ length: 1000 }, (_, i) => i + 1);
function Parent() {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    console.log("clicked");
  }, []);
  const evenNumber = useMemo(() => {
    console.log("filtering");
    return arr.filter((i) => i % 2 === 0);
  }, []);
  return (
    <>
      <Child name="Aryan" handleClick={handleClick} />
      {count}
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <p>{evenNumber.length}</p>
    </>
  );
}

export default Parent;
