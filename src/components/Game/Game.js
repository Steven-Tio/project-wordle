import React from "react";

function Game({ children }) {
  return <div className="guess-results">{children}</div>;
}

export default Game;

/*
<div class="guess-results">
  <p class="guess">FIRST</p>
  <p class="guess">GUESS</p>
</div>
*/
