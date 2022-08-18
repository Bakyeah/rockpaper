
const choices = ["rock","paper","scissors"];
const winners = [];

function game(){
  for(let i = 0 ; i<5 ; i++){

  
playRound(i);
  }
  logWins();

}


function playRound(round){
  const  playerSelection = playerChoice() ;
  const  computerSelection = computerChoice();
  
 const winner = checkWinner(playerSelection,computerSelection);
 
 winners.push(winner);
 logRound(playerSelection,computerSelection,winner,round);
}


function playerChoice(){
    let input = prompt("Type Rock , Paper , Scissors");
    
    while(input == null){
      input = prompt("Type Rock , Paper , Scissors");
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    if(check==false){
     input = prompt("Type rock , paper , scissors capitalization does not matter but spelling shall be the same");
     while(input==null){
      input = prompt("Type Rock , Paper , Scissors");
     }
    input = input.toLowerCase();
    check = validateInput(input);
    }
    return input ;
    }

function computerChoice() {
    return choices[Math.floor(Math.random()*choices.length)] 
    // math.floor rounds up the decimal number and math.random gives a no. between 0 to  less than 1 
    // .99*3 = 2.999 which will become 2 and so on

}
function validateInput(choice){
  return (choices.includes(choice)) ;
   
  
  }
  function checkWinner(choiceP , choiceC){
    if(choiceP===choiceC){
      return "Tie";
    } else if ((choiceP==="rock" && choiceC==="scissors")
    ||(choiceP==="paper"&&choiceC==="rock")
    ||(choiceP==="scissors"&&choiceC==="paper")){
      return "Player";
    }
    else {
      return "Computer";
    }

  }
  function logWins(){
  let playerWins = winners.filter((item)=> item=="Player").length;
  let computerWins = winners.filter((item)=> item=="Computer").length;
  let ties = winners.filter((item)=> item=="Tie").length;
  console.log("Results");
  console.log("Player Wins : " , playerWins);
  console.log("Computer Wins :" , computerWins);
  console.log("Ties :", ties);
}
function logRound(playerChoice,computerChoice,winner,round){
  console.log("Round :",round);
  console.log("Player Chose :" , playerChoice);
  console.log("Computer Chose : ", computerChoice);
  console.log(winner ," Won the round ") ; 
}
  
