import { useRef, useState } from "react";


export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState(null)
  const playerName = useRef()

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={() => setEnteredPlayerName(playerName.current.value)}>Set Name</button>
      </p>
    </section>
  );
}
