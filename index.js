var inquirer = require("inquirer");
var Word = require("./word");
var wordsList = ["mercury", "venus", "earth", "mars", "jupiter", "saturn",
    "uranus", "neptune", "pluto"];

// Game counters
var winCounter = 0;
var lossCounter = 0;
var gameTotal = 0;

function startGame() {

    // Solution is chosen randomly from wordsList.
    chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)];
    // Construct the Word object for chosenWord
    var gameWordObject = new Word(chosenWord);
    var numBlanks = gameWordObject.letterObjectArray.length;
    var numGuesses = gameWordObject.numBlanks;
    console.log("numGuesses: ", numGuesses);
    var wrongGuesses = [];

    function getGuess(gameWordObject) {
        console.log("word: ", chosenWord);
        inquirer.prompt([
            {
                name: "guess",
                message: "Guess a letter:"
            }
        ]).then(function (answers) {
            var guess = answers.guess;
            gameWordObject.makeGuess(guess);
            console.log(gameWordObject.showWord());
            numGuesses = numGuesses - 1;

            if (numGuesses > 0) {
                getGuess(gameWordObject);
            }
        });
    }

    getGuess(gameWordObject);
    console.log("here");
}


startGame();

