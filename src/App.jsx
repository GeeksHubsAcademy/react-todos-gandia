import { useState } from "react";

function Button() {
  const [clicks, setClicks] = useState(0);
  const [increaseBy, setInc] = useState(1);
  console.log("increaseBy", increaseBy);

  function handleClick() {
    setClicks(clicks + increaseBy);
  }
  return (
    <main>
      <input
        type="number"
        onChange={(ev) => setInc(Number(ev.target.value))}
        value={increaseBy}
      />
      <button
        onClick={handleClick}
      >
        Clicked {clicks} times
      </button>
    </main>
  );
}

export default Button;
