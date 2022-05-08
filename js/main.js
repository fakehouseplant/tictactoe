let newGameboard = {
    board: document.getElementById('gameboard'),
    initializeBoard: function() {
        for (i = 0; i < 3; i++) {
            let row = document.createElement('section')
            row.className = 'row'

            for(j = 0; j < 3; j++){
                let box = document.createElement('section')
                box.className = 'box'
                row.appendChild(box)
            }
            this.board.appendChild(row)
        }  
    }
}

newGameboard.initializeBoard()

let play = document.querySelectorAll('.box').addEventListener('click', placeMark())

function placeMark() {
    document.querySelector('.box').textContent = 'x'
}

