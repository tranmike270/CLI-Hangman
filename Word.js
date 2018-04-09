var Letter = require('./letter.js');





function turnToObjectArray(word){
    var arr = [];
    for(var i = 0; i < word.length; i++){

        if(word[i] === " "){
            var currentLetter = new Letter("space");
            arr.push(currentLetter);
        }else{
            var currentLetter = new Letter(word[i]);
            arr.push(currentLetter);
        };


    };

    for(var i = 0; i < arr.length; i++){
        if(arr[i].letter === 'space'){
            arr[i].guess('space');
        };
    };

    return arr;
};


module.exports = class Word{
    constructor(word){
        this.wordArr = turnToObjectArray(word);
        this.displayWord = function(){
            var currentWord = [];
            for(var i = 0; i < this.wordArr.length; i++){

                var character = this.wordArr[i].isGuessed();
                if(character === "space"){
                    currentWord.push(" ");
                }else{
                    currentWord.push(character);
                };

            };

            var theWord = currentWord.join("");

            return theWord;
        
        };
        this.guess = function(guessedLetter){

            for(var i = 0; i < this.wordArr.length; i++){
                this.wordArr[i].guess(guessedLetter);
            };

        };
    };
};