function Letter (characterString) {

    this.characterString = characterString;
    this.placeHolder = "_";
    this.guessStatus = false;

    this.checkGuessStatus = function () {
        if (this.guessStatus === true) {
            return this.characterString;
        } else {
            return this.placeHolder;
        }
    }

    this.checkCharacter = function (characterGuess) {
        if (characterGuess === this.characterString) {
            this.guessStatus = true;
            return true;
        } else {
            return false;
        }
    }

}

module.exports = Letter;


// console.log("Hi");
// var letterOne = new Letter("c");
// console.log("letterOne: ", letterOne);
// console.log("checkGuessStatus of letterOne upon construction: ", letterOne.checkGuessStatus());
// console.log("Running checkCharacter on c: ", letterOne.checkCharacter("c"));
// console.log("checkGuessStatus of letterOne now: ", letterOne.checkGuessStatus());


