let deck = [
    {
        name: "Bulbasaur",
        damage: 60
    }, {
        name: "Caterpie",
        damage: 40
    }, {
        name: "Charmander",
        damage: 60
    }, {
        name: "Clefairy",
        damage: 50
    }, {
        name: "Jigglypuff",
        damage: 60
    }, {
        name: "Mankey",
        damage: 30
    }, {
        name: "Meowth",
        damage: 60
    }, {
        name: "Nidoran - female",
        damage: 60
    }, {
        name: "Nidoran - male",
        damage: 50
    }, {
        name: "Oddish",
        damage: 40
    }, {
        name: "Pidgey",
        damage: 50
    }, {
        name: "Pikachu",
        damage: 50
    }, {
        name: "Poliwag",
        damage: 50
    }, {
        name: "Psyduck",
        damage: 60
    }, {
        name: "Rattata",
        damage: 30
    }, {
        name: "Squirtle",
        damage: 60
    }, {
        name: "Vulpix",
        damage: 50
    }, {
        name: "Weedle",
        damage: 40
    }
]
//let playersCards = {[]};
let playersCards = [];
let computersCards = [];



let updatedDeck = deck;
// let playerPoints = 0;
// let computerPoints = 0;
let playerRoundWins = 0;
let computerRoundWins = 0;

function dealCards(){
    // put the cards in an object for both the player and the computer
    for(let i = 0; i < 3; i++){
        let randomPlayersCard = updatedDeck[Math.floor(Math.random() * 18)];
        playersCards.push(randomPlayersCard);
       // updatedDeck = deck.splice(randomPlayersCard, 1);
        let randomComputersCard = updatedDeck[Math.floor(Math.random() * 18)];
        computersCards.push(randomComputersCard);
        //updatedDeck = deck.splice(randomComputersCard, 1);
    }
    //console.log(updatedDeck);
}
let round = 1;
function battle() {
    // write a for loop that will loop the round and deal new cards each round
    //while()
    while (playerRoundWins < 3 && computerRoundWins < 3){
   // for(let r = 1; r < 4; r++){
        let playerPoints = 0;
        let computerPoints = 0;
    //while(playerRoundWins < 3 && computerRoundWins < 3) {
        for(let i = 0; i < 3; i++){
            playersCards = [];
            computersCards = [];
            dealCards();
            console.log(`%c Round ${round}`, `color: red`);
            console.log(`${playersCards[i].name} ${playersCards[i].damage} vs. ${computersCards[i].name} ${computersCards[i].damage}`);
            if(playersCards[i].damage > computersCards[i].damage){
                console.log(`%c Player 1 wins the point!`, `color: blue; font-size: 12px;`);
                playerPoints += 1;
                round += 1;
            }
            else {
                console.log(`%c The computer wins the point!`, 'color: blue; font-size: 12px');
                computerPoints += 1;
                round += 1;
            }
            console.log(`Player: ${playerPoints} \nComputer: ${computerPoints}`);
        } // end of the for loop

        if (playerPoints > computerPoints){
            console.log(`%c Player 1 wins the round!`, `color: green; font-size: 18px`);
            playerRoundWins += 1;
            console.log(`%c Score:\n Player Victories: ${playerRoundWins} vs Computer Victories: ${computerRoundWins}`, `font-size: 18px;`);
        }
        else {
            console.log(`%c Computer wins the round!`, `color: green; font-size: 18px`);
            computerRoundWins += 1;
            console.log(`%c Score:\n Player Victories: ${playerRoundWins} vs Computer Victories: ${computerRoundWins}`, `font-size: 18px;`);
        }
        if (playerRoundWins == 3 || computerRoundWins ==3){
            console.log(`Game Over!`)
        }
    }
  //  }//end of while loop
} // end of the function
battle();






















//console.log(computersCards);
// let randomCard;
// for(let i = 0; i < 3; i++){
//     randomCard = deck[Math.floor(Math.random() * 20)];
//     deck[i] -= randomCard;
// }
// class CardsInHand {
//     constructor(card1, card2, card3){
//         this.card1 = card1;
//         this.card2 = card2;
//         this.card3 = card3;
//     }
//     chooseCard(chosen1){
//         console.log(`They play their ${this.chosen1} card`)
//         //chosen1 will be the card the player or cpu selects
//     }
// }
// let playersCards = new CardsInHand(randomCard, randomCard, randomCard);
// console.log(playersCards);
