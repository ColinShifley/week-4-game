//Crystals jQuery Game
$(document).ready(function() {
    //generates a random # and assigns puts it into an array for the crystal vallues
    var crystalNum = [];
    //console.log(crystalNum);

    
    
//random number
 var randomNumber = 0;

    //number of games won
    var wins = 0;

    //number of games lost
    var lost = 0;


    //sets user guess to 0
    var playerGuess;


    //resets the game to play again
    function reseter() {
        for (var i = 0; i < 4; i++) {
            randomNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
            $('#randomnum').text(randomNumber);
            var crystalMath = Math.floor(Math.random() * 12 + 1);
            crystalNum.push(crystalMath);
            
            $("#wins").text(wins);
            $("#lose").text(lost);
            playerGuess = 0;
            $("#currentguess").text(playerGuess);
            
        }
    }

    reseter();
console.log(playerGuess);
console.log(crystalNum)

//assigns a variable with randomly generated array number from crystalNum

	var c1 = crystalNum[0];
    var c2 = crystalNum[1];
    var c3 = crystalNum[2];
    var c4 = crystalNum[3];
console.log(c1)
    
	function win() {
		wins++;
	}
	function lose() {
		lost++;
	}
    //an attempt to automate which button is clicked and send that number to reseter function to add it to the userguess.
    /*
for (var i = 0; i < crystalNum.length; i++) {
	// console.log(crystalNum[i])
	(function(num) {
		$(".btn").on("click", function() {
			console.log('it works -> button index -> ', num)
		})
	})(crystalNum[i])
    // $(".btn").on("click", function() {
    // 	(function(num){
    //         console.log("it works!")
    //   		console.log(num);		
    // 	})(crystalNum[i])


    // });
}
*/


//Registers clicks on each sonic, then calls reseter() as well as sending an alert and increasing the win/lose tracker.
$("#crystal1").on("click", function() {
	playerGuess = c1 + playerGuess
	$("#currentguess").text(playerGuess)
	if (playerGuess === randomNumber) {
		        alert("YOU WIN!! THE POT OF GOLD!!!");
		        win();
		        reseter();
		        
		    }; 

		    if (playerGuess > randomNumber){
		        alert("YOU LOSE!");
		        lose();
		        reseter();
		        
		    };
	
});
$("#crystal2").on("click", function() {
	playerGuess = c2 + playerGuess
	$("#currentguess").text(playerGuess)
	if (playerGuess === randomNumber) {
		        alert("YOU WIN!! THE POT OF GOLD!!!");
		        win();
		        reseter();
		        
		    }; 

		    if (playerGuess > randomNumber){
		        alert("YOU LOSE!");
		        lose();
		        reseter();
		        
		    };
});
$("#crystal3").on("click", function() {
	playerGuess = c3 + playerGuess
	$("#currentguess").text(playerGuess)
	if (playerGuess === randomNumber) {
		        alert("YOU WIN!! THE POT OF GOLD!!!");
		        win();
		        reseter();
		        
		    }; 

		    if (playerGuess > randomNumber){
		        alert("YOU LOSE!");
		        lose();
		        reseter();
		        
		    };
});
$("#crystal4").on("click", function() {
	playerGuess = c4 + playerGuess
	$("#currentguess").text(playerGuess)
	console.log(playerGuess)
	if (playerGuess === randomNumber) {
		        alert("YOU WIN!! THE POT OF GOLD!!!");
		        win();
		        reseter();
		        
		        
		    }; 

		    if (playerGuess > randomNumber){
		        alert("YOU LOSE!");
		        lose();
		        reseter();
		        
		    };
});


});

