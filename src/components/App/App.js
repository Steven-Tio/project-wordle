import Game from "../Game";
import Guess from "../Guess/Guess";
import Header from "../Header";
import Keyboard from "../Keyboard/Keyboard";
import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function App() {
  const [guessHistory, setGuessHistory] = useState([]);
  const [wonGame, setWonGame] = useState(false);

  return (
    <div className="wrapper">
      {wonGame && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>
              {" "}
              {guessHistory.length === 1
                ? "1 guess"
                : `${guessHistory.length} guesses`}
            </strong>
            .
          </p>
        </div>
      )}
      {guessHistory.length === NUM_OF_GUESSES_ALLOWED && !wonGame && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
      <Header />

      <div className="game-wrapper">
        <Game>
          <Guess
            guessHistory={guessHistory}
            answer={answer}
            setWonGame={setWonGame}
          ></Guess>
          <Keyboard
            wonGame={wonGame}
            guessHistory={guessHistory}
            setGuessHistory={setGuessHistory}
          />
        </Game>
      </div>
    </div>
  );
}

export default App;
