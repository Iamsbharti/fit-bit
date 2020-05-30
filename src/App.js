import React from "react";
import "./index.css";
import { Container } from "@material-ui/core";
import NavBar from "./components/NavBar";
function App() {
  return (
    <div className="App">
      <Container>
        <NavBar />
      </Container>
    </div>
  );
}

export default App;
