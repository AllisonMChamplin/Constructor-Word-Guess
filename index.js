// Game counters
global.winCounter = 0;
global.lossCounter = 0;
global.gameTotal = 0;

var Word = require("./word");
var wordsList = ["mercury", "venus", "earth", "mars", "jupiter", "saturn",
    "uranus", "neptune", "pluto"];



function incrementWins() {

}

function startGame() {
    // Solution is chosen randomly from wordsList.
    chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)];
    console.log("\n Word: ", chosenWord + "\n");
    // Construct the Word object for chosenWord
    var gameWordObject = new Word(chosenWord);
    gameWordObject.getGuess();
}

startGame();