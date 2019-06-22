var Word = require("./word");

// Array of Word Options (all lowercase)
var wordsList = ["mercury", "venus", "earth", "mars", "jupiter", "saturn",
    "uranus", "neptune", "pluto"];

// Holds a mix of blank and solved letters (ex: 'n, _ _, n, _').
var blanksAndSuccesses = [];
// Holds all of the wrong guesses
var wrongGuesses = [];

// Game counters
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;


function startGame() {
    // Reset the guesses back to 0.
    numGuesses = 9;
    blanksAndSuccesses = [];
    wrongGuesses = [];
  
    // Solution is chosen randomly from wordsList.
    chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)];

    // Construct a Word object for the chosenWord
    var gameWordObject = new Word(chosenWord);
  
    // We print the solution in console (for testing).
    console.log(gameWordObject);
  
  
    // Fill up the blanksAndSuccesses list with appropriate number of blanks.
    // This is based on number of letters in solution.
    for (var i = 0; i < gameWordObject.numBlanks; i++) {
      blanksAndSuccesses.push("_");
    }
  
    // Print the initial blanks in console.
    console.log(blanksAndSuccesses);
}


