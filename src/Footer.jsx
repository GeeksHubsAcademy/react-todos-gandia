import { useContext } from "react";
import { AppContext } from "./context/app.context";

function Footer() {
  const [globalState] = useContext(AppContext);
  return (
    <div>
      <h1>Footer</h1>
      <h2>clicked: {globalState.clickedTimes}</h2>
      <h2>todos: {globalState.todosLength}</h2>
    </div>
  );
}

export default Footer;
