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
let playersCards = [];
let computersCards = [];
let updatedDeck = [];
let playerPoints = 0;
let computerPoints = 0;
let playerRoundWins = 0;
let computerRoundWins = 0;

function dealCards(){
    for(let i = 0; i < 3; i++){
        let randomPlayersCard = deck[Math.floor(Math.random() * 18)];
        playersCards.push(randomPlayersCard);
       // deck.splice(randomPlayersCard, 1);
        let randomComputersCard = deck[Math.floor(Math.random() * 18)];
        computersCards.push(randomComputersCard);
       // deck.splice(randomComputersCard, 1);
    }
}
dealCards();
console.log(playersCards);
console.log(computersCards);
console.log(deck);

function battle() {
    for(let i = 0; i < playersCards.length; i++){
        console.log(` ${playersCards[i].name} ${playersCards[i].damage} vs. ${computersCards[i].name} ${computersCards[i].damage}`)
        if(playersCards[i].damage > computersCards[i].damage){
            console.log(`Player 1 wins the point!`);
            playerPoints += 1;
        }
        else {
            console.log(`The computer wins the point!`)
            computerPoints += 1;
        }
        console.log(`Player: ${playerPoints} \nComputer: ${computerPoints}`);
    }
    if (playerPoints > computerPoints){
        console.log(`Player 1 wins the round!`);
        playerRoundWins += 1;
        console.log(`Round Score: ${playerRoundWins} vs ${computerRoundWins}`);
    }
    else {
        console.log(`Computer wins the round!`);
        computerRoundWins += 1;
        console.log(`Round Score: Player Wins ${playerRoundWins} vs Computer Wins ${computerRoundWins}`);
    }
} 
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
