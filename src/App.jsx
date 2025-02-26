import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Feedback from "./components/feedback/feedback";
import Description from "./components/description/Description";

function App() {
  return (
    <>
      <Description></Description>
      <Feedback></Feedback>
    </>
  );
}

export default App;
