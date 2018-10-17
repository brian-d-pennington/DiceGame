let playerName = prompt("Before beginning, please enter your name");
let startingScore = 0; 
let gameCounter = 0;
let gameTotalThusFar;
let gameScoreCard = [];
let finalScoreCount;
let reducer = (accumulator, currentValue) => accumulator + currentValue; // used in multiple parts of game to sum arrays

function finalScore() { 
    let gameScoreCardAsString = gameScoreCard.toString();
    let gameScoreCardSplit = gameScoreCardAsString.split(" "); 
    let cardValues = [];
    for (i = 0; i <= gameScoreCardSplit.length; i++) {
        if (gameScoreCardSplit[i] % 2 === 1 || gameScoreCardSplit[i] % 2 === 0) { // wonky solution to filtering out all numbers
            cardValues.push(gameScoreCardSplit[i]);
        }
    }
    let cardValuesToNumbers = cardValues.map(Number);
    finalScoreCount = cardValuesToNumbers.reduce(reducer);
    alert(playerName + ", your final score is " + finalScoreCount + ".");
    alert("Game over. Reload the browser if you want to play again for some reason..");
    
}   

function toProceed() { 
    if (gameCounter != 0) { //if they play they will have a count other than zero.
        let doYouWantToPlayAgain = prompt("You know the drill.. do you wanna play again? Y/N");
        if (doYouWantToPlayAgain == "N" || doYouWantToPlayAgain == "n") {
            alert("Yeah I don't blame ya...");
            console.log(finalScore());
        }
        else {
            alert("Ok you sadist.. (press OK)");
            console.log(briansLousyDiceGame(playerName));
        }
    } 
    else {
        let doYouWantToPlay = prompt("Welcome to DEATH CARD! The goal is to accumulate as high of a dice score as possible, as long if it's even. If you end up with an odd total, then you must face the DEATH CARD round, and that's no fun. There are odd-sided dice in the second round, increasing your chance of odd number roll tallys (can be good or bad depending where you're at.) Would you like to play? Y/N");
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
    alert("Ok " + playerName + ", hit OK to generate your first five rolls of the 6 die.");
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
        alert("Your first 5 dice rolls added up to " + diceSum + " (check the console to view each roll), press OK to choose your next dice roll");
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

            let arrayTotal = rollTallied.reduce(reducer);
            gameTotalThusFar = arrayTotal + diceSum;
            alert("Your total for this spin was " + computerDiceRoll + ", giving you a total of " + gameTotalThusFar + "!");
            gameCounter++;
        } // for loop, 5 player turns
            
            
    }       console.log(multiDiceCodeSolution(diceSum));
            
            let scoreCard = playerName + ": " + gameTotalThusFar + ". ";
            gameScoreCard.push(scoreCard); 

            if (gameTotalThusFar % 2 === 1) {
                prompt("Uh oh, that's an odd score. However, you still have a chance! Choose a card between 1 and 3. You have a 33% chance of picking the DEATH CARD, which will end your game streak. Soooo.. pick a card: 1, 2, or 3.");
                let meaninglessCardPick = Math.random(); // yes, the "card pick" is completely pointless
                    if (meaninglessCardPick >= .66 && meaninglessCardPick <= 1) { 
                        alert("Oh snap, you got the DEATH CARD. Game over.");
                        console.log(finalScore());
                    }
                    else {
                        alert("Phew, you were saved by the LIFE CARD!");
                        if (gameCounter > 7) {
                            alert("Here are your accumulated scores: " + gameScoreCard);
                        }
                        console.log(toProceed());
                    }
            }
            else {
                alert("Cool, you got an EVEN number score!");
                if (gameCounter > 7) {
                    alert("Here are your accumulated scores: " + gameScoreCard);
                }
                console.log(toProceed());
            }   
        
        
    }   //closes briansLousyDiceGame()




function sixSidedDiceRoll()  { //primitive, first attempt die solution. I left it to document my progress.
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
    else {
        dice = 6;   
    } 
    return dice;
}
