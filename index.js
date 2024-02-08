let moves = 0
const cardList = [
    'Bob', 'Broccolo', 'Isabelle', 'Lolly', 'Marshall', 'TT'
]
let cardSet;
let board = [];
const rows = 3;
const columns = 4;

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
console.log(board)
setTimeout(hideCards, 0)
}

function hideCards() {
    for (let r = 0; r < rows; r++ ) {
        for (let c =0; c < columns; c++) {
            let card = document.getElementById(r.toString() + '-' + c.toString())
            card.src = 'Leaf.jpg'
        }
    }
}

function chosenCard () {
    if (this.src.includes('Leaf')) {
        
    }
}

