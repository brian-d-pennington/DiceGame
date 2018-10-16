// determie and state game rules (alert)
    
// the object of the game is to get as high of score possible, but the final score MUST be even.
// player gets 10 rolls total: 5 determined by a pre determined 6 sided die, the last 5 rolls given a choice of 4, 6, 8, 10, 13, 19 sided dice
// if even, the final score gets tallied, and if a new record the user gets to store initials.

let playerName = prompt("Before beginning, please enter your name");
let startingScore = 0; 
let gameCounter = 0;
let gameTotalThusFar;

function toProceed() { 
    if (gameCounter != 0) { //if they play they will have a count other than zero.
        let doYouWantToPlayAgain = prompt("You know the drill.. do you wanna play again? Y/N");
        if (doYouWantToPlayAgain == "N" || doYouWantToPlayAgain == "n") {
            alert("Yeah I don't blame ya...");
        }
        else {
            alert("Ok you sadist.. (press OK)");
            console.log(briansLousyDiceGame(playerName));
        }
    } 
    else {
        let doYouWantToPlay = prompt("The point of the game is to get as high of an EVEN NUMBER score as possible. The first 5 rolls are automatic (6 sided die), and the last 5 are optional (4, 6, 8, 11, 13, or 19) to give you many scoring opportunities. But remember: the higher value dice give you an increased chance at an ODD overall score. Would you like to play? Y/N");
        if (doYouWantToPlay == "N" || doYouWantToPlay == "n") {
        alert("Well alright then..");
    } 
        else {
        alert("Let's play! (press OK)");
        console.log(briansLousyDiceGame(playerName));
        }
    } // big if statement
} //function
console.log(toProceed());

function briansLousyDiceGame(playerName) {
    alert("Hello " + playerName + ", hit OK to generate your first five rolls of the 6 die.");
    //let gameTotalThusFar
    let diceSum;

    function fiveRandomRolls(startingScore) { 
        let diceValone = sixSidedDiceRoll();
        console.log(diceValone);
        let diceValtwo = sixSidedDiceRoll();
        console.log(diceValtwo);
        let diceValthree = sixSidedDiceRoll()
        console.log(diceValthree);
        let diceValfour = sixSidedDiceRoll();
        console.log(diceValfour);
        let diceValfive = sixSidedDiceRoll();
        console.log(diceValfive);
        diceSum = startingScore + diceValone + diceValtwo + diceValthree + diceValfour + diceValfive;
        alert("Your current score is " + diceSum + " (check the console to view each roll), press OK to choose your next dice roll");
    }   console.log(fiveRandomRolls(startingScore));
    
    function multiDiceCodeSolution(diceSum) { // more sophisticated code
        let numberOfSides;
        let playerTurns;
        let rollTallied = [];
        
    
        for (playerTurns = 1; playerTurns <= 5; playerTurns++) {
            let playerChoice = prompt("For your next roll, would you like to use a 4, 6, 8, 11, 13, or 19 sided die?");
            if (playerChoice == "4") {
                numberOfSides = 4;
            }
            else if (playerChoice == "6") {
                numberOfSides = 6;
            }
            else if (playerChoice == "8") {
                numberOfSides = 8;
            } 
            else if (playerChoice == "11") {
                numberOfSides = 11;
            }
            else if (playerChoice == "13") {
                numberOfSides = 13;
            }
            else {
                numberOfSides = 19;
            }
        
            let computerDiceRoll = Math.floor(Math.random() * numberOfSides) + 1;
            rollTallied.push(computerDiceRoll);

            let reducer = (accumulator, currentValue) => accumulator + currentValue;
            let arrayTotal = rollTallied.reduce(reducer);
            gameTotalThusFar = arrayTotal + diceSum;
            alert("Your total for this spin was " + computerDiceRoll + ", giving you a total of " + gameTotalThusFar + "!");
            } // for loop, 5 player turns
            gameCounter++;
            
        }   console.log(multiDiceCodeSolution(diceSum));
            
        
        
            if (gameTotalThusFar % 2 === 1) {
                prompt("Uh oh, that's an odd score. However, you still have a chance! Choose a card between 1 and 5. You have a 80/20 chance of picking a LIFE CARD, which will let you play again! If you get a DEATH CARD, your game is still over. Soooo.. pick a card: 1, 2, 3, 4, or 5.");
                let meaninglessCardPick = Math.random(); // yes, the "card pick" is completely pointless
                    if (meaninglessCardPick >= .5 && meaninglessCardPick <= .7) { // the vicinity of .666
                        alert("Oh snap, you got the DEATH CARD. Game over.");
                    }
                    else {
                        alert("Phew, you were saved by the LIFE CARD!");
                        console.log(toProceed());
                    }
            }
            else {
                alert("Cool, you got an EVEN number score!");
                console.log(toProceed());
            }

    }   




function sixSidedDiceRoll()  { //primitive, first attempt solution. I left it to document my progress.
    var dice = Math.random();
    if (dice <= .17) {
        dice = 1;   
    }
    else if (dice <= .33) {
        dice = 2;   
    }
    else if (dice <= .50) {
        dice = 3;   
    }
    else if (dice <= .67) {
        dice = 4;   
    }
    else if (dice <= .84) {
        dice = 5;   
    }
    else if (dice <= 1) {
        dice = 6;   
    }
    return dice;
}
