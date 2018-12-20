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
function dealCards(contestant) {
    for (let i = 0; i < 3; i++) {
        let randomCard = deck[Math.floor(Math.random() * 18)];
        contestant.cards.unshift(randomCard);
        //console.log(contestant.cards);
    }
}
// make choose card method in each const
const player1 = {
    cards: [],
    points: 0,
    chooseCard(cardToPlay) {

    },
   // chosenCard: this.cards[Math.floor(Math.random() * 3)]
}

// dealCards(player1);
// console.log(player1.randomCard);

const cpu = {
    cards: [],
    points: 0,
}


let round = 1;
function battle() {
   while (player1.points < 5 && cpu.points < 5){  
            dealCards(player1);
            dealCards(cpu);
            console.log(`%c Round ${round}`, `color: red`);
            console.log(`${player1.cards[0].name} ${player1.cards[0].damage} vs. ${cpu.cards[0].name} ${cpu.cards[0].damage}`);
            if(player1.cards[0].damage > cpu.cards[0].damage){
                console.log(`%c Player 1 wins the point!`, `color: blue; font-size: 12px;`);
                player1.points += 1;
                round += 1;
            }
            else if (cpu.cards[0].damage > player1.cards[0].damage){
                console.log(`%c The computer wins the point!`, 'color: blue; font-size: 12px');
                cpu.points += 1;
                round += 1;
            }
            else {
                console.log(`%c Tie, no points awarded`, `color: blue; font-size: 12px`);
                round += 1;
            }
            console.log(`%c Player: ${player1.points} Computer: ${cpu.points}`, `color: green; font-size: 12px;`);

        } // end of the while loop
        if(player1.points == 5){
            console.log(`%c Player 1 Wins!`, `color: orange; font-size: 20px;`)
        }
        else if(cpu.points == 5){
            console.log(`%c Computer Wins!`, `color: orange; font-size: 20px;`)
        }
    }//end of function
battle();













