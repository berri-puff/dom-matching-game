let moves = 0
const cardList = [
    'Bob', 'Broccolo', 'Isabelle', 'Lolly', 'Marshall', 'TT'
]
let cardSet;
let board = [];
const rows = 3;
const columns = 4;
let firstCard;
let secondCard;

window.onload = function() {
    shuffleCards();
    startGame();
}
const shuffleCards=()=> {
     cardSet = cardList.concat(cardList)
     for (let i= 0; i < cardSet.length; i++) {
        let j = Math.floor(Math.random() * cardSet.length)
        let temp = cardSet[i];
        cardSet[i] = cardSet[j]
        cardSet[j] = temp
       
    }
}

function startGame(){
for (let r = 0; r < rows; r++) {
    let row = []
    for (let c = 0; c < columns; c++) {
        let cardImage = cardSet.pop()
        row.push(cardImage)
        let card = document.createElement('img')
        card.id = r.toString() + '-' + c.toString()
        card.src = cardImage+ '.png'
        card.classList.add('card')
        card.addEventListener('click', chosenCard)
        document.getElementById('game-grid').append(card)
    }
    board.push(row)
}
setTimeout(hideCards, 0)
}

function hideCards() {
    for (let r = 0; r < rows; r++ ) {
        for (let c =0; c < columns; c++) {
            let card = document.getElementById(r.toString() + '-' + c.toString())
            card.src = 'Leaf.png'
        }
    }
}

function chosenCard () {
    if (this.src.includes('Leaf')){
        if (!firstCard) {
            firstCard = this;
            let coords = firstCard.id.split('-')
            let r = parseInt(coords[0])
            let c = parseInt(coords[1])
            firstCard.src = board[r][c] + '.png'
        }
        else if (!secondCard && this != firstCard){
            secondCard = this
            let coords = secondCard.id.split('-')
            let r = parseInt(coords[0])
            let c = parseInt(coords[1])
            secondCard.src = board[r][c] + '.png'
            setTimeout(update, 1000)
        }
    }
}
function update () {
    if (firstCard.src != secondCard.src) {
        firstCard.src = 'Leaf.png';
        secondCard.src = 'Leaf.png'
       moves +=1
       document.getElementById('move-count').innerText = moves
    }else {
        moves +=1
        document.getElementById('move-count').innerText = moves
    }
    firstCard = null;
    secondCard = null
}





