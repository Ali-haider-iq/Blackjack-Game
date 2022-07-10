let cards = []
const cardsEl = document.getElementById("cards")
let statEl = document.getElementById("gamestat")
let stat = " "
const sumEl = document.getElementById("sum")
const startEl = document.getElementById("start")
const newEl = document.getElementById("new")
let sum = 0
let hasBlackJack = false
let isAlive = false


function cardRandom() {
    let cardsNumber = Math.floor(Math.random()* 13) + 1
    if (cardsNumber > 10) {
        return 10
    }  else if ( cardsNumber === 1 ) {
        return 11 
    } else {
        return cardsNumber
    }
}

startEl.addEventListener("click", function() {
    isAlive = true
    let cardone = cardRandom()
    let cardtwo = cardRandom()
    cards = [ cardone, cardtwo]
    sum = cardone + cardtwo 
    showCards()
})

function showCards() {
    cardsEl.textContent = "Cards: " 
    for (let i = 0; i < cards.length; i++)
    cardsEl.textContent += cards[i] + " "

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20 ){
        stat = " Do you want to draw a new card? "
    } else if (sum === 21) {
        stat = " You've got Blackjack! "
        hasBlackJack = true
    } else {
        stat = " You're out of the game! "
        isAlive = false
    }
    statEl.textContent = stat
}

newEl.addEventListener("click", function(){
    if ( isAlive === true && hasBlackJack === false){
        let card = cardRandom()
        sum += card
        cards.push(card)
        showCards()
    }
})