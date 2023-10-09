let playerPoints = 0;
let computerPoints = 0;
let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");



function getComputerChoice (){
    let options = ['rock','paper','scissors'];
    let choice = options[Math.floor(Math.random()*options.length)];
    return choice;
}

function playRound (playerSelection, computerSelection){
    let outcome = document.querySelector(".round-outcome"); 
    switch (playerSelection) {
        case 'rock':
            if (computerSelection == 'rock'){
                const p = document.createElement('p');
                p.innerText = "It's a tie! Rock can't beat rock";
                outcome.appendChild(p);
            }
            else if (computerSelection=='paper'){
                const p = document.createElement('p');

                p.innerText = "You lose! Paper beats rock";
                outcome.appendChild(p);
                computerPoints++;
            }
            else {
                const p = document.createElement('p');

                playerPoints++;
                p.innerText="You win! Rock beats scissors";
                outcome.appendChild(p);
            }
            break;
        
        case 'paper':
            if (computerSelection=='paper'){
                const p = document.createElement('p');
                p.innerText ="It's a tie! Paper can't beat paper";
                outcome.appendChild(p);
            }
            else if (computerSelection=='rock'){
                const p = document.createElement('p');
                playerPoints++;
                p.innerText = "You win! Paper beats rock";
                outcome.appendChild(p);
            }
            else {
                const p = document.createElement('p');
                computerPoints++;
                p.innerText = "You lose! Scissors beat paper";
                outcome.appendChild(p);
            } 
            break;
        case 'scissors': 
            if (computerSelection=='scissors'){
                const p = document.createElement('p');
                p.innerText = "It's a tie! Scissors can't beat scissors";
                outcome.appendChild(p);
            }
            else if (computerSelection=='paper'){
                const p = document.createElement('p');
                playerPoints++; 
                p.innerText = "You win! Scissors beats paper";
                outcome.appendChild(p);
            }
            else {
                const p = document.createElement('p');
                computerPoints++;
                p.innerText = "You lose! Rock beats scissors";
                outcome.appendChild(p);
            } 
            break;            
    }
}

rock.addEventListener('click', () => {
    const playerSelection = 'rock';
    const computerSelect = getComputerChoice();
    return playRound(playerSelection,computerSelect);
    })

scissors.addEventListener('click', () => {
    const playerSelection = 'scissors';
    const computerSelect = getComputerChoice();
    return playRound(playerSelection,computerSelect);
    })
paper.addEventListener('click', () => {
    const playerSelection = 'paper';
    const computerSelect = getComputerChoice();
    playRound(playerSelection,computerSelect);
    })


