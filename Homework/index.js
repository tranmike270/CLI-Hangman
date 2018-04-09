var Word = require('./Word.js');
var inquirer = require("inquirer");


var arrayOfWords = ["Pokemon", "Peace", "Black Panther"];

var wordChosen = chooseWord();


var guessedLetters = [];
var chances = 7;
var theWord = new Word(wordChosen);

var currentDisplayed = theWord.displayWord();
var displayThis = display(currentDisplayed);
console.log("\n");
console.log(" " + " " + displayThis);
console.log("\n");



var guessALetter = function(){
    inquirer.prompt([
        {
            type: "input",
            name: "guessed",
            message: "Guessed Letters : " + guessedLetters.toString() + "\n  Guess a letter: ",
            validate : function(input){
                    var tf;
                    var alreadyGuessed = guessedLetters.includes(input.toLocaleUpperCase());
                    if(isNaN(input) && input.length === 1 && alreadyGuessed === false){ tf = true;} else {
                        tf=false;
                        console.log("\n\n  Please only enter a letter.\n  Please only have 1 input.\n  Please do not guess the same letter again.\n\n ");
                    }
                    return tf;
                }
        }
    ])
    .then(function(letter){
        guessedLetters.push(letter.guessed.toUpperCase());
        guessedLetters.sort();
        console.log(" -------------------------------------");
        theWord.guess(letter.guessed.toLowerCase());
        var newDisplay = theWord.displayWord();
        if(currentDisplayed === newDisplay){
            chances--;
            displayHangman(chances);
            console.log(" " + " " + "Incorrect!!");
            displayThis = display(currentDisplayed);
            console.log("\n");
            console.log(" " + " " + displayThis);
            console.log("\n");
            if(chances === 0){
                replay();
            }else guessALetter();
        }else if(newDisplay === wordChosen){
            console.log(" " + " " +"Congradulations you finished the word! And the man lives!");
            displayHangman("yay");
            currentDisplayed = newDisplay;
            displayThis = display(currentDisplayed);
            console.log("\n");
            console.log(" " + " " + displayThis);
            console.log("\n");
            replay();
        }else{
            displayHangman(chances);
            console.log(" " + " " + "Correct!!!");
            currentDisplayed = newDisplay;
            displayThis = display(currentDisplayed);
            console.log("\n");
            console.log(" " + " " + displayThis);
            console.log("\n");
            guessALetter();
        };
    });
}

guessALetter();

function chooseWord(){
    var index = Math.floor(Math.random() * ((2 - 0 + 1) + 0));

    return arrayOfWords[index];

};


function display(word){
    var displayArr = [];

    for(var i = 0; i < word.length; i++){
        displayArr.push(word[i]);
        displayArr.push(" ");
    };
    var displayThis = displayArr.join("");

    return displayThis;
};

function displayHangman(num){
    var right = String.fromCharCode(92)
    switch(num){
        case 7: {
            console.log("\n\n\n\n");
            break;
        }
        case 6:{
            console.log("       O");
            console.log("\n\n\n");
            break;
        }
        case 5:{
            console.log("        O");
            console.log("        |");
            console.log("        |");
            console.log("\n\n");
            break;
        }
        case 4:{
            console.log("        O");
            console.log("       /|");
            console.log("        |");

            console.log("\n\n");
            break;
        }
        case 3:{
            console.log("        O");
            console.log("       /|" + right);
            console.log("        |");
            console.log("\n\n");
            break;
        }
        case 2:{
            console.log("        O");
            console.log("       /|" + right);
            console.log("        |");
            console.log("       / ");
            console.log("\n");
            break;
        }
        case 1: {
            console.log("        O");
            console.log("       /|" + right);
            console.log("        |");
            console.log("       / " + right);
            console.log("\n");
            console.log("Don't guess wrong again, or else the man will die!!!!!!!");
            break;
        }
        case 0: {
            console.log("        X");
            console.log("       /|" + right);
            console.log("        |");
            console.log("       / " + right);
            console.log("\n");
            console.log("    Yikes...");
            break;
        }
        default: {
            console.log("        O");
            console.log("       /|" + right);
            console.log("        |");
            console.log("       / " + right);
            console.log("\n");
            break;
        }
    }
};

function replay(){
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'replay',
            message: 'Do you wish to play again?'
        }
    ])
        .then(function(choice){
            if(choice.replay){
                wordChosen = chooseWord();
                theWord = new Word(wordChosen);
                chances = 7;
                displayHangman(chances);
                currentDisplayed = theWord.displayWord();
                displayThis = display(currentDisplayed);
                guessedLetters = [];
                console.log("\n");
                console.log(" " + " " + displayThis);
                console.log("\n");
                guessALetter();
            }
        });
}