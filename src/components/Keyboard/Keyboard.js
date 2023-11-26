import React, { useState } from "react";
import { WORD_LENGTH, NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Keyboard({ guessHistory, setGuessHistory, wonGame }) {
  const [currentGuess, setCurrentGuess] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (currentGuess.length !== 5) {
      return;
    }
    let newGuessHistory = [...guessHistory, currentGuess];
    setGuessHistory(newGuessHistory);
    setCurrentGuess("");
    //console.log(currentGuess);
  };

  const handleType = (event) => {
    let currWord = event.target.value.toUpperCase();
    let ch = currWord.charAt(currWord.length - 1);
    if (ch.length === 1 && !ch.match(/[A-Z]/)) {
      return;
    }
    setCurrentGuess(currWord);
  };
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => handleSubmit(event)}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        value={currentGuess}
        required
        disabled={
          wonGame || guessHistory.length === NUM_OF_GUESSES_ALLOWED
            ? true
            : false
        }
        minLength={WORD_LENGTH}
        maxLength={WORD_LENGTH}
        onChange={(event) => handleType(event)}
        id="guess-input"
        type="text"
      />
    </form>
  );
}

export default Keyboard;

/*
<form class="guess-input-wrapper">
  <label for="guess-input">Enter guess:</label>
  <input id="guess-input" type="text" />
</form>

This component should render a <form> tag, including a label and a text input.
The text input should be controlled by React state.
When the form is submitted:
The entered value should be logged to the console (for now).
The input should be reset to an empty string.
The user's input should be converted to ALL UPPERCASE. No lower-case letters allowed.
The input should have a minimum and maximum length of 5.
NOTE: The minLength validator is a bit funky; you may wish to use the pattern attribute instead. 
This is discussed in more detail on the Solution page.
*/
