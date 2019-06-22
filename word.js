var Letter = require("./letter");
var chosenWord = "mercury";
// // Solution is chosen randomly from wordList.
// chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)];

function Word(chosenWord) {

    // The word is broken into array of individual letters.
    this.lettersInChosenWord = chosenWord.split("");
    // We count the number of letters in the word.
    this.numBlanks = this.lettersInChosenWord.length;

    this.buildLetterObjectsArray = function () {
        var letterObjectArray = [];
        for (var i = 0; i < this.numBlanks; i++) {
            var x = new Letter(this.lettersInChosenWord[i]);
            letterObjectArray.push(x);
        }
        return letterObjectArray;
    }

};


// var gameWord = new Word(chosenWord);
// console.log("gameWord.lettersInChosenWord: ", gameWord.lettersInChosenWord);
// console.log("gameWord.buildLetterObjectsArray: ", gameWord.buildLetterObjectsArray());
// console.log("gameWord.buildLetterObjectsArray: ", gameWord.buildLetterObjectsArray());
