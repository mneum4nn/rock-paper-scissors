
function getComputerChoice (){
    let options = ['rock','paper','scissors'];
    let choice = options[Math.floor(Math.random()*options.length)];
    return choice;
}
function round (playerSelection, computerSelection){
    switch (playerSelection) {
        case 'rock':
            if (computerSelection == 'rock'){
                return ("It's a tie! Rock can't beat rock");
            }
            else if (computerSelection=='paper'){
                return("You lose! Paper beats rock");
            }
            else {
                return("You win! Rock beats scissors");
            }
            break;
        
        case 'paper':
            if (computerSelection=='paper'){
                return("It's a tie! Paper can't beat paper");
            }
            else if (computerSelection=='rock'){
                return ("You win! Paper beats rock");
            }
            else {
                return("You lose! Scissors beat paper");
            } 
            break;
        case 'scissors': 
            if (computerSelection=='scissors'){
                return("It's a tie! Scissors can't beat scissors");
            }
            else if (computerSelection=='paper'){
                return ("You win! Scissors beats paper");
            }
            else {
                return("You lose! Rock beats scissors");
            } 
            break;            
    }
}
