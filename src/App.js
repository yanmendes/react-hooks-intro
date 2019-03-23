import React, { Component } from "react";

import CharPicker from "./components/CharPicker";
import Character from "./components/Character";

const App = () => {
  const [selectedCharacter, setSelectedCharacter] = React.useState(1);
  const [side, setSide] = React.useState("light");
  const [destroyed, setDestroyed] = React.useState(false);

  return (
    <>
      {destroyed ? (
        <h1>Total destruction!</h1>
      ) : (
        <>
          <CharPicker
            side={side}
            selectedChar={selectedCharacter}
            onCharSelect={e => setSelectedCharacter(e.target.value)}
          />
          <Character selectedChar={selectedCharacter} />
          <button onClick={() => setSide("light")}>Light Side</button>
          <button onClick={() => setSide("dark")}>Dark Side</button>
          {side === "dark" && (
            <button onClick={() => setDestroyed(true)}>DESTROY!</button>
          )}
        </>
      )}
    </>
  );
};

export default App;
