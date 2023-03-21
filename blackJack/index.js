//let firstCard = getRandomCard()
//let secondCard =getRandomCard()
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messegeEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el") 

function getRandomCard() {
    let randomNumber = Math.floor( Math.random() * 13) + 1
    if (randomNumber > 10){
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
     
}
//let sumEl = document.querySelector("#sum-el")
//console.log(sum)
function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard + secondCard]
    let sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: " 
    for ( i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = ("Sum: ", + sum)
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = " Hurray, You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messegeEl.textContent = message 
}

function newCard() {
    //console.log("Drawing a new card from the deck!")
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
    
    //startGame()
    
}
/*
let age = 22

if (age <= 20) {
    console.log("Not allowed!")
} else if (age === 21) {
    console.log("Goodluck Player!")
    
}

else {
    console.log("Welcome!")
}




else if (age > 21) {
    console.log("Good Luck!")
} else if (age === 21) {
    console.log("Welcome!")
} 
*/
 