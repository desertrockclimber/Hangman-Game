 // Global Variable
 // ==============================================
var codeOptions = ['ironman', 'butter', 'dummy', 'piano', 'lightbulb', 'skywalker', 'existentialism', 'walden', 'zivhago', 'dostoyevsky', 'zoo', 'kix', 'javascript', 'jquery', 'html', 'boom', 'w']; 

var selectedWord = "";
var letters = [];
var numBlanks = 0;
var blanksAndSuccesses = []; 
var wrongGuesses = [];


// Game counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 0;

 // Functions 
 // ===============================================

function startGame () {
	guessesLeft = 20;
	wrongLetters = [];
	blanksAndSuccesses = [];
	wrongGuesses = [];


	selectedWord = codeOptions[Math.floor(Math.random() * codeOptions.length)];
	letters = selectedWord.split("");
	numBlanks = letters.length;
	document.getElementById("wrongGuesses").innerHTML=wrongGuesses;

	// Reset
	

	for (var i = 0; i<numBlanks; i++){

		blanksAndSuccesses.push("_");
	}
	// Input into HTML
	document.getElementById("codeToGuess").innerHTML = blanksAndSuccesses.join(" ");
	document.getElementById("numberGuesses2").innerHTML = guessesLeft;
	document.getElementById("wins").innerHTML = winCount;
	document.getElementById("losses").innerHTML = lossCount;


	console.log(selectedWord);
	console.log(letters);
	console.log(numBlanks);
	console.log(blanksAndSuccesses);
}

function letterAudit(letter){
	
	// alert(letters);
	var isLetterInWord = false;

	for (var i=0; i<numBlanks; i++){
	if(selectedWord[i] == letter) {
 			isLetterInWord = true; 
 			// console.log("letter found");
 			}
		}
	
 		// Check where in word letter exists

	if(isLetterInWord) {
 	  	for (var i=0; i<numBlanks; i++) {
	    		if(selectedWord[i] == letter) {
	   			blanksAndSuccesses[i] = letter;

	    	}
 	  	}
 	}
 
	 
	 else {
	   	wrongGuesses.push(letter);
	   	guessesLeft--
	   }


	 console.log(blanksAndSuccesses);

}



function roundComplete(){
	console.log("Win Count:" + winCount + "| Loss Count:" + lossCount + "| Guesses Left" + guessesLeft);

	document.getElementById("numberGuesses2").innerHTML = guessesLeft;
	document.getElementById("wins").innerHTML=winCount;
	document.getElementById("losses").innerHTML=lossCount;
	document.getElementById("codeToGuess").innerHTML=blanksAndSuccesses.join(" ");
	document.getElementById("wrongGuesses").innerHTML=wrongGuesses.join(" ")




	if (letters.toString() == blanksAndSuccesses.toString()) {
		winCount++;
		alert("You Won!");

		document.getElementById("wins").innerHTML = winCount;
		
		startGame();

	}
	else if (guessesLeft == 0) {
		lossCount++;
			alert("You lost");
			

		startGame();
	}
}

 // Main process
 // ================================================


startGame();


document.onkeyup = function(event) {
	var guesses = String.fromCharCode(event.keyCode).toLowerCase();
	letterAudit(guesses);
	roundComplete();
	
	console.log(guesses);

	document.getElementById('losses').innerHTML=lossCount;

}


