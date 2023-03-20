let firstCard = 11
let secondCard = 10
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messegeEl = document.getElementById("message-el")
//let sumEl = document.getElementById("sum-el") 
let sumEl = document.querySelector("#sum-el")
//console.log(sum)


function startGame() {
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

//console.log(startGame)

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