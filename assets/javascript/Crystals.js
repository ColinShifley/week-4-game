//Crystals jQuery Game
$(document).ready(function() {
//generates a random # and assigns puts it into an array for the crystal vallues
 var crystalNum = [];
//console.log(crystalNum);

//assigns a variable with randomly generated array number from crystalNum
var c1 = crystalNum[0];
var c2 = crystalNum[1];
var c3 = crystalNum[2];
var c4 = crystalNum[3];

//number of games won
var winsd = 0;

//number of games lost
var lost = 0;


//sets user guess to 0
var playerGuess = 0;


//resets the game to play again
function reseter () {
for (var i = 0; i < 4; i++) {
		var randomNumber = Math.floor(Math.random() * ((120-19)+1) + 19);	
		$('#randomnum').text(randomNumber);
		var crystalMath = Math.floor(Math.random() * 12 + 1);
		crystalNum.push(crystalMath);
		$("wins").text(winsd);
		$("lose").text(lost);
}}

reseter()


/*    .onclick doesnt work

$(".btn").on("click", function(){
  alert("it works!");
 });

$("#crystal1, #crystal2, #crystal3, #crystal4").click(clickCalc());
	
function clickCalc() {
	
	alert("you clicked me");
}



function clickCalc() {
	playerguess = btn value [i] + playerguess;
}
*/

//get onclick working
if (playerGuess === randomNumber) {
	alert("YOU WIN!! THE POT OF GOLD!!!");
	winsd++;
	reseter();
	
} 
else if {
	(playerGuess > randomNumber) 
		alert("YOU LOSE!");
		lost++;
		reseter();
		
	}


});



