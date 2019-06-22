var chosenWord = "be";

var Letter = require("./letter");

function Word(chosenWord) {

    this.lettersInChosenWord = chosenWord.split("");
    this.numBlanks = this.lettersInChosenWord.length;

    this.letterObjectArray = [];
    for (var i = 0; i < this.numBlanks; i++) {
        var x = new Letter(this.lettersInChosenWord[i]);
        this.letterObjectArray.push(x);
    }

    this.showWord = function () {
        var x = "";
        for (var i = 0; i < this.numBlanks; i++) {
            x = x.concat(this.letterObjectArray[i].showCharacter());
            x = x.concat(" ");
        }
        return x;
    }
    
    this.makeGuess = function (guess) {
        for (var i = 0; i < this.numBlanks; i++) {
            this.letterObjectArray[i].checkCharacter(guess);
        }
    }

};

module.exports = Word;


// var gameWord = new Word(chosenWord);
// console.log("gameWord.showWord(): ", gameWord.showWord());
// gameWord.makeGuess("b");
// console.log("gameWord.showWord(): ", gameWord.showWord());