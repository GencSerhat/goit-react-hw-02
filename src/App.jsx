import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Description from "./components/description/Description";
import Feedback from "./components/Feedback/feedback";

function App() {
  return (
    <>
      <Description></Description>
      <Feedback></Feedback>
    </>
  );
}

export default App;
