import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const decreaseClick = () => setCount((c) => c - 1);
  const increaseClick = () => setCount((c) => c + 1);
  return (
    <div>
      <div>Count : {count}</div>
      <div>
        <button onClick={decreaseClick}>Decrease</button>
        <button onClick={increaseClick}>Increase</button>
      </div>
    </div>
  );
}

export default App;
