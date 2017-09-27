// board array that pushing x and o to
const game = []

// pushing x and o
const createx = function() {
  game.push('x')
  console.log(game)
}

const createo = function() {
  game.push('o')
  console.log(game)
}

// when to use x or o --- place x on even or 0 and o on odd

const isX = function(array) {
  if (array.length === 0 || array.length % 2 === 0) {
    return true
  }
}
// Placing x and o on board and pushing to array game

const placeLetter = function(event) {
  event.preventDefault() // preventing page refresh
  $('.userMessage').text('') // initial user message that goes away
  if ($(this).text() === 'X' || $(this).text() === 'O') {
    return  // only one letter per box
  }
  if (isX(game) === true) {  // x on 0 and evens and o on odds
    createx() // pushes x to array
    $(this).text('X') // changing board letter to x
  } else {
    createo()
    $(this).text('O')
  }
  console.log('$(this) is', $(this).text())
}
// ending game
//
// const gameEnd = function () {
//   if (game.length === 9)
//
// }
// checking to see who won

// win scenarios


const boardArray = [$('#box1'),$('#box2'),$('#box3'),$('#box4'), $('#box5'),
                    $('#box6'),$('#box7'),$('#box8'),$('#box9')]

module.exports = {
createx,
createo,
placeLetter,
game,
isX,
boardArray
}
