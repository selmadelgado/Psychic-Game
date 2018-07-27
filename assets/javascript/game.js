window.onload=function() {

    // Count number of times the user wins
    var wins = 0; 
    // Count number of time the user loses
    var losses = 0;
    // Number of times the user has to guess
    var maxTries = 10;
    // Input displayed by user
    var currentTries = "";
    
    // call the get randomLetterFunction
    var randomLetter = getRandomLetter();

    // Insert the values in the html at beginning when the pages loads
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("guessesLeft").innerHTML = maxTries;
    document.getElementById("guessesSoFar").innerHTML = currentTries;
                    

    // event handler named  addEventListener is triggered whenever there is a key stroke
    document.addEventListener("keydown", function(e) {
       var input=String.fromCharCode(e.keyCode);


        // maxTries goes down as keystrokes go up
        maxTries--;
        
        // if the input is not empty, put a comma after it. Else, don't put a comma after it. 
        if (currentTries !== "") {
            currentTries = currentTries + ", " + input.toLowerCase();
        }
        else {
            currentTries = input.toLowerCase();
        }

        // If user's input matches computer's number, increase wins, reset tries, generate another random letter, guesses reset
        if (input.toLowerCase() === randomLetter){
            wins++;
            maxTries = 10;
            randomLetter = getRandomLetter();
            currentTries ="";
            console.log(randomLetter);
        }

        // else, once tries go to 0, losses increase, reset tries, generate another random number
        else if (maxTries === 0) {
            losses++;
            maxTries = 10;
            randomLetter = getRandomLetter();
            currentTries = "";
            
        }

        // change values in html based on the input        
        document.getElementById("wins").innerHTML = wins;
        document.getElementById("losses").innerHTML = losses;
        document.getElementById("guessesLeft").innerHTML = maxTries;
        document.getElementById("guessesSoFar").innerHTML = currentTries;

    });

};

//  Pick a random character from the possibleLetters string.
function getRandomLetter () {
    var possibleLetters = "abcdefghijklmnopqrstuvwxzy"
    return possibleLetters.charAt(Math.floor(Math.random()*possibleLetters.length));
}