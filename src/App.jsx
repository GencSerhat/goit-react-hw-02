import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Feedback from "./components/Feedback/feedback";
import Description from "./components/escription/Description";

function App() {
  return (
    <>
      <Description></Description>
      <Feedback></Feedback>
    </>
  );
}

export default App;
