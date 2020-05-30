import React from "react";
import { muscles, exercises } from "./redux/defaultStore";
function App() {
  console.log(muscles, exercises);
  return (
    <div className="App">
      <h1>Fit-bit</h1>
    </div>
  );
}

export default App;
