const rps = ["rock", "Rock", "paper", "Paper", "scissors", "Scissors"];
var userScore = 0
var compScore = 0
var tieScore = 0
var compNumber = Math.floor(Math.random()*3)
var compInput = rps[compNumber]

//function playRPS() {
//    var userInput = window.prompt("Please select rock, paper, or scissors", "Insert Here")
//    console.log(userInput.toLowerCase())
//    if (userInput.toLowerCase() == "rock" || userInput.toLowerCase =="paper" || userInput.toLowerCase =="scissors") {
//        alert ("WTF was that?")
//        //compScore ++
//        return //playRPS()
//    }



    alert ("The computer has chosen " + compInput)
    if (userInput == CompInput) {
        alert ("it's a Tie!")
    }
    else if (userInput === "rock" && compInput === "scissors") {
        alert ("User Wins!")
    } else if (userInput === "rock" && compInput === "paper") {
        alert ("Computer Wins!")
    } else if (userInput === "rock" && compInput === "rock") {
        alert ("It's a Tie!")
    } else if (userInput === "paper" && compInput === "scissors") {
        alert ("Computer Wins!")
    } else if (userInput === "paper" && compInput === "rock") {
        alert ("User Wins!")
    } else if (userInput === "paper" && compInput === "paper") {
        alert ("It's a Tie!")
    } else if (userInput === "scissors" && compInput === "scissors") {
        alert ("It's a Tie!")
    } else if (userInput === "scissors" && compInput === "paper") {
        alert ("User Wins!")
    } else if (userInput === "scissors" && compInput === "rock") {
        alert ("Computer Wins!")
    }
    //alert("The score is: ") {break} + userScore + CompScore)


console.log(compInput)
playRPS()

function playRPS() {
    var userInput = window.prompt('Please select Rock, Paper, or Scissors', "Insert Here")
    console.log(userInput.toLowerCase())
    if (!(userInput.toLowerCase() == "rock" || userInput.toLowerCase() == "paper" || userInput.toLowerCase() == "scissors")) {
        alert ("That wasn't rock, paper, or scissors!")
         compScore ++
        return 
    }
}  