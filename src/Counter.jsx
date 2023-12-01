import { useContext, useState } from "react";
import { AppContext } from "./context/app.context";

function Button() {
  const [clicks, setClicks] = useState(0);
  const [increaseBy, setInc] = useState(1);

  const [, setGlobalState] = useContext(AppContext);

  console.log("increaseBy", increaseBy);

  function handleClick() {
    const nextClicks = clicks + increaseBy;
    setClicks(nextClicks);
    setGlobalState((state) => ({
      ...state,
      clickedTimes: nextClicks,
    }));

    // setGlobalState( { clickedTimes: nextClicks })
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
