import styled from "styled-components";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";
import { useState } from "react";

function App() {
  const [isGameStart, setIsGameStart] = useState(false);
  const toggleGamePlay = () => {
    setIsGameStart((prev) => !prev);
  };
  return (
    <>{isGameStart ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}</>
  );
}

export default App;
