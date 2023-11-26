import React, { useState, useEffect } from "react";
import { NUM_OF_GUESSES_ALLOWED, WORD_LENGTH } from "../../constants";
import { checkGuess } from "../../game-helpers";

function Guess({ guessHistory, answer, setWonGame }) {
  const [guessGrid, setGuessGrid] = useState([]);
  useEffect(() => {
    let newGuessGrid = [];
    for (let i = 0; i < NUM_OF_GUESSES_ALLOWED; i++) {
      if (i >= guessHistory.length) {
        let guessRow = [];
        for (let j = 0; j < WORD_LENGTH; j++) {
          guessRow.push(<span key={j} className="cell"></span>);
        }
        newGuessGrid.push(
          <p key={i} className="guess">
            {guessRow}
          </p>
        );
        setGuessGrid(newGuessGrid);
        continue;
      }

      let guessRow = [];
      let word = guessHistory[i];
      let result = checkGuess(word, answer);
      let numOfCorrect = 0;
      for (let j = 0; j < WORD_LENGTH; j++) {
        let status = result[j].status;

        if (status === "correct") {
          numOfCorrect++;
          if (numOfCorrect === 5) {
            console.log("YOU WON");
            setWonGame(true);
          }
        }
        guessRow.push(
          <span key={j} className={`cell ${status}`}>
            {word.charAt(j)}
          </span>
        );
      }
      newGuessGrid.push(
        <p key={i} className="guess">
          {guessRow}
        </p>
      );
    }
    setGuessGrid(newGuessGrid);
  }, [guessHistory]);

  return <div className="guess-results">{guessGrid}</div>;
}

export default Guess;

/*
<div class="guess-results">
  <p class="guess">
    <span class="cell">H</span>
    <span class="cell">E</span>
    <span class="cell">L</span>
    <span class="cell">L</span>
    <span class="cell">O</span>
  </p>
  <p class="guess">
    <span class="cell">T</span>
    <span class="cell">H</span>
    <span class="cell">E</span>
    <span class="cell">R</span>
    <span class="cell">E</span>
  </p>
  <p class="guess">
    <span class="cell">W</span>
    <span class="cell">O</span>
    <span class="cell">R</span>
    <span class="cell">L</span>
    <span class="cell">D</span>
  </p>
  <p class="guess">
    <span class="cell"></span>
    <span class="cell"></span>
    <span class="cell"></span>
    <span class="cell"></span>
    <span class="cell"></span>
  </p>
  <p class="guess">
    <span class="cell"></span>
    <span class="cell"></span>
    <span class="cell"></span>
    <span class="cell"></span>
    <span class="cell"></span>
  </p>
</div>
*/
