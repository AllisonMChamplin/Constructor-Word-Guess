
var Word = require("./word");
var wordsList = ["mercury", "venus", "earth", "mars", "jupiter", "saturn",
    "uranus", "neptune", "pluto"];

// Game counters
var winCounter = 0;
var lossCounter = 0;
var gameTotal = 0;

function startGame() {

    // Solution is chosen randomly from wordsList.
    // var numGuesses = gameWordObject.numBlanks;
    chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)];
    console.log("Word: ", chosenWord);
    // Construct the Word object for chosenWord
    var gameWordObject = new Word(chosenWord);
    // var numBlanks = gameWordObject.letterObjectArray.length;
    // console.log("numGuesses: ", numGuesses);
    // var wrongGuesses = [];
    gameWordObject.getGuess();

}

startGame();

// else {
//     // ..then we add the letter to the list of wrong letters, and we subtract one of the guesses.
//     wrongGuesses.push(letter);
//     numGuesses--;
//   }