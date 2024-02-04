 //selecting the ip box

var guessno= document.getElementById("guessnumber")
var result= document.getElementById("result")
// creating a random number with fns
var randomNumber = Math.floor(Math.random()*10)+1
//var score = document.getElementById("score")
var total_score=10
function check()
{  
    var enterno = Number(guessno.value) 
    if(enterno==randomNumber)
    {
        console.log("correct")
        result.textContent="Correct"
        alert("You Won!")
    }
    else
    {
        total_score=total_score-1
        score.textContent="score:"+total_score
        console.log("wrong")
        result.textContent="Wrong"
    }
    
}
