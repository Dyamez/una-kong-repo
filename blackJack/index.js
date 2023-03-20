let firstCard = 4
let secondCard =5
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messegeEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el") 
//let sumEl = document.querySelector("#sum-el")
//console.log(sum)
function startGame() {
    renderGame()
}

function renderGame() {
    cardsEl.textContent = ("Cards: " + cards[0] + " " + cards[1])
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
    console.log("Drawing a new card from the deck!")
    let card = 3
    sum += card
    startGame()
    
}

let age = 22

if (age <= 20) {
    console.log("Not allowed!")
} else if (age === 21) {
    console.log("Goodluck Player!")
    
}

else {
    console.log("Welcome!")
}



/*
else if (age > 21) {
    console.log("Good Luck!")
} else if (age === 21) {
    console.log("Welcome!")
} 
*/