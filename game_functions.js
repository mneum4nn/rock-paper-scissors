


function getComputerChoice (){
    let options = ['rock','paper','scissors'];
    let choice = options[Math.floor(Math.random()*options.length)];
    return choice;
}

function playRound (playerSelection, computerSelection){
    let result = document.querySelector(".results")
    let playerPoints = false;
    let computerPoints = false; 
    switch (playerSelection) {
        case 'rock':
            if (computerSelection == 'rock'){
                result.textContent("It's a tie! Rock can't beat rock");
            }
            else if (computerSelection=='paper'){
                result.textContent("You lose! Paper beats rock");
                computerPoints = true;
            }
            else {
                playerPoints = true;
                result.textContent("You win! Rock beats scissors");
            }
            break;
        
        case 'paper':
            if (computerSelection=='paper'){
                result.textContent = ("It's a tie! Paper can't beat paper");
            }
            else if (computerSelection=='rock'){
                playerPoints = true;
                result.textContent = ("You win! Paper beats rock");
            }
            else {
                computerPoints = true;
                result.textContent("You lose! Scissors beat paper");
            } 
            break;
        case 'scissors': 
            if (computerSelection=='scissors'){
                result.textContent("It's a tie! Scissors can't beat scissors");
            }
            else if (computerSelection=='paper'){
                playerPoints = true; 
                result.textContent ("You win! Scissors beats paper");
            }
            else {
                computerPoints = true;
                result.textContent("You lose! Rock beats scissors");
            } 
            break;            
    }
    return (playerPoints, computerPoints); 
}
function playRoundEventListener () {
    let possibleChoices = document.querySelector("#rps-btn")
    possibleChoices.addEventListener('click', (MouseEvent) => {
        let playerSelection = MouseEvent.target
        return playRound(playerSelection, getComputerChoice());
    }); 
}

/*function game (){
    for (let i = 0 ; i<5; i++){
        let playerSelection = prompt("Rock, paper or scissors?");
        let computerSelection = getComputerChoice();
        playerSelection.toLowerCase();
        console.log(round(playerSelection,computerSelection));
    }
}*/
function playGame(){
    let scoreboard = document.querySelector(".score");
    let playerScore = 0; 
    let computerScore = 0
    while ( playerScore <=5 && computerScore <=5){
        if (playRoundEventListener() == (true,false)){
            playerScore++;
        } else if (playRoundEventListener() ==(false,true)){
            computerScore++;
        }
        scoreboard.textContent(playerScore + " : " + computerScore);
    }
}