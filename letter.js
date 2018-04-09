// Module to create the Letter classes
module.exports = class Letter{
    constructor(letter){
        this.letter = letter;
        this.guessed = false;
        this.isGuessed = function(){
            if(this.guessed){
                return this.letter;
            }else{
                return "_"
            };
        }
        this.guess = function(character){
            if(character === this.letter.toLowerCase()){
                this.guessed = true;
            }
        }
    }
};
// var word = "Hello There";
// var letterObjects = [];
// var hidden = [];


// for(var i = 0; i < word.length; i++){
//     if(word[i] === " "){
//         letter.push("Space");
//         hidden.push("&nbsp;");
//     }else{
//         var curtLet = word[i];
//         curtLet = new Letter(word[i]);
//         letterObjects.push(curtLet);
//         hidden.push("_");
//     };
   
// };

// console.log("This is your word!");

// displayToGuess(hidden);

// var game = function(){
//     inquirer.prompt([
//         {
//             type: 'input',
//             name: 'guessed',
//             message: 'Guess a letter! '
//         }
//     ])
//     .then(function(letter){
//         if(word.indexOf(letter.guessed)){
//             var indecies = findIndecies(letter.guessed);
//             for(var k = 0; k < indecies.length; k++){
//                 letterObjects[k].isGuessed
//             }
//         }
//     })
// }




// function displayToGuess(arg){
//     var display = arg.join(" ");
//     display = display.replace("&nbsp;", " ");
//     console.log(display);
// };

// function findIndecies(letter){
//     var array = [];

//     for(var i = 0; i < word.length; i++) {
//         if (word[i] === letter) array.push(i);
//     };

//     return array;
// }