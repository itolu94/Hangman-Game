// Word bank and hints for each wordBank
var wordBank = ["Naruto Uzamaki", "Ichigo", "gon", "sakura", "itachi", "Zoro", "Hunter"];
var hints = [""];
var word ;
var wordBankSpace;

// picks a random element from the wordBank array and generates blank spaces
var wordGenorator = function() {
    var guesses = [" "]
        // Need to add code to clear word
    word = wordBank[Math.floor(Math.random() * wordBank.length)];
    wordBankSpace = [" "];
    console.log(word);
    for (var i = 0; i < word.length; i++) {
        if (word.charAt(i) === " ") {
            wordBankSpace.push("&nbsp; &nbsp; &nbsp;");
        } else {
            wordBankSpace.push("_ ")
        }

    }
    console.log(wordBankSpace);
    document.getElementById('wordSpot').innerHTML = wordBankSpace.join("");
}



// Code for recognizing characters pressed and putting it into array

// }
// // }
document.onkeydown = function userGuesses() {
    // store the letter that was pressed
    var userInput = event.key;
    // Test if the key pressed is a letter
    // if (userInput >= 2 && userInput <= 200) {
    // Get the var-word and evalute each character
    for (i = 0; i < word.length; i++) {
        if ((userInput == word.charAt(i)) == true) {
            wordBankSpace[i + 1] = userInput;
            console.log(userInput);
            console.log(wordBankSpace[i]);
            document.getElementById('wordSpot').innerHTML = wordBankSpace.join("");
        }
    }

}




