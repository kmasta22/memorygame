

//making sure page loads first
document.addEventListener( 'DOMContentLoaded', function () {
	



//creating variables, yourScore is the one that the user will change after they click on the images
//game score is generated at random for the user at the beginning of game
//wins and losses updates as the player goes through the game
var yourScore = 0;
var gameScore = Math.floor((Math.random() * 100) + 50);
var wins = 0;
var losses = 0;

//five emoji characters are each assigned a random number that is hidden from user
var sadnessEmoji = Math.floor((Math.random() * 15) + 5);
var angerEmoji = Math.floor((Math.random() * 15) + 5);
var joyEmoji = Math.floor((Math.random() * 15) +5);
var disgustEmoji = Math.floor((Math.random() * 15) + 5);
var fearEmoji = Math.floor((Math.random() * 15) + 5);

//retrieve document elements to alter it at the initial page load
document.getElementById('gameScore').innerHTML = "Game Score: " + gameScore;
document.getElementById('yourScore').innerHTML = "Your Score: " + yourScore;
document.getElementById('wins').innerHTML = "Wins: " + wins;
document.getElementById('losses').innerHTML ="Losses: " + losses;

//print values to console
console.log(sadnessEmoji + "  sadness");
console.log(angerEmoji + "  anger");
console.log(joyEmoji + "  joy");
console.log(disgustEmoji + "  disgust");
console.log(fearEmoji + "  fear");
console.log(gameScore + " game Score");


//each emoji image has its own click function with an if/else statement inside
//within each if/else statement is a test to see if yourScore is equal to the game score or over it
//if its equal it will run the winGame() function; if its over it will run the loseGame() function
//within both of these functions is a resetGame() function to make sure that all of the values get set back to 0/random 
//except for the wins/losses values



//sadness emoji game play 

var sadnessImage = document.getElementById("sadness");

sadnessImage.addEventListener('click', function(){


    yourScore += sadnessEmoji;
    
    document.getElementById('yourScore').innerHTML = "Your Score: " + yourScore;

    if(yourScore === gameScore){

        winGame();
    }

    else if (yourScore > gameScore){

        loseGame();
    }    
});


//anger emoji game play

var angerImage = document.getElementById("anger");

angerImage.addEventListener('click', function(){


    yourScore += angerEmoji;
    
    document.getElementById('yourScore').innerHTML = "Your Score: " + yourScore;

    if(yourScore === gameScore){

        winGame();
    }

    else if (yourScore > gameScore){

        loseGame();
    }
});


//joy emoji game play

var joyImage = document.getElementById("joy");

joyImage.addEventListener('click', function(){


    yourScore += joyEmoji;
    
    document.getElementById('yourScore').innerHTML = "Your Score: " + yourScore;

    if(yourScore === gameScore){

        winGame();
    }

    else if (yourScore > gameScore){

        loseGame();
    }
});


//disgust emoji game play

var disgustImage = document.getElementById("disgust");

disgustImage.addEventListener('click', function(){


    yourScore += disgustEmoji;
    
    document.getElementById('yourScore').innerHTML = "Your Score: " + yourScore;

    if(yourScore === gameScore){

        winGame();
    }

    else if (yourScore > gameScore){

        loseGame();
    }
});


//fear emoji game play

var fearImage = document.getElementById("fear");

fearImage.addEventListener('click', function(){


    yourScore += fearEmoji;
    
    document.getElementById('yourScore').innerHTML = "Your Score: " + yourScore;

    if(yourScore === gameScore){

        winGame();
    }

    else if (yourScore > gameScore){

        loseGame();
    }
});


function winGame (){

    alert("You Win!");
        wins++;
        document.getElementById('wins').innerHTML ="Wins " + wins;
        resetGame();
}


function loseGame (){

    alert("You Lose!");
        losses++;
        document.getElementById('losses').innerHTML ="Losses: " + losses;
        resetGame();
}


function resetGame(){

    yourScore = 0;
    gameScore = Math.floor((Math.random() * 100) + 50);
    sadnessEmoji = Math.floor((Math.random() * 15) + 5);
    angerEmoji = Math.floor((Math.random() * 15) + 5);
    joyEmoji = Math.floor((Math.random() * 15) + 5);
    disgustEmoji = Math.floor((Math.random() * 15) + 5);
    fearEmoji = Math.floor((Math.random() * 15) + 5);
    document.getElementById('gameScore').innerHTML = "Game Score: " + gameScore;
    document.getElementById('yourScore').innerHTML = "Your Score: " + yourScore;

   
}

///making sure page loads first
}, false );