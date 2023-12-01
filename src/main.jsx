import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { AppContext } from "./context/app.context.js";

// eslint-disable-next-line react-refresh/only-export-components
function Main() {
  const [globalState, setGlobalState] = useState({
    clickedTimes: 0,
    todosLength: 0,
  });
  return (
    <AppContext.Provider value={[globalState, setGlobalState]}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </AppContext.Provider>
  );
}


ReactDOM.createRoot(document.getElementById("root")).render(
  <Main />,
);
