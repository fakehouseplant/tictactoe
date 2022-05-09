let newGameboard = {

    //selects the section with the Id #gameboard to create board
    board: document.getElementById('gameboard'),

    initializeBoard: function() {
        for (i = 0; i < 3; i++) {
            //creates a row and assigns it the class .row
            let row = document.createElement('section')
            row.className = 'row'

            //creates each individual box, assigns it the class .box, and appends it to the row
            for(j = 0; j < 3; j++){
                let box = document.createElement('section')
                box.className = 'box'
                row.appendChild(box)
            }
            //appends the row to the board
            this.board.appendChild(row)
        }  
    }
}

//call the function to build the board in the DOM
newGameboard.initializeBoard()

//assign all elements in the DOM with the class .box to a variable
const allBoxes = document.querySelectorAll('.box')

//querySelectorAll() returns a NodeList which is array-like. This creates an array from the variable allBoxes, and then uses the forEach method to assign an event listener to each element with the class of .box
Array.from(allBoxes).forEach(box => box.addEventListener('click', placeMark)) 

//places an X in the box that is clicked on 
function placeMark(click) {
    click.target.innerText = 'x'
}

// class Player {
//     constructor()
// }