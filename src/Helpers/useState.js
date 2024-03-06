import { useState } from "react";
export const UseState = () => {
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount(count + 1);
  };
  const Decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div>
        <button onClick={Increment}>Increment</button>
      </div>
      <div>
        <button onClick={Decrement}>Decrement</button>
      </div>
      Count value : {count} times
    </>
  );
};
