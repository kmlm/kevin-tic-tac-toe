// board array that pushing x and o to
let game = ['','','','','','','','','']

// pushing x and o
const createx = function(index) {
  game[index] = 'x'
  console.log(game)
}

const createo = function(index) {
  game[index] = 'o'
  console.log(game)
}

// when to use x or o --- place x on even or 0 and o on odd

let numTurns = 0

const whoseTurn = function() {
  if (numTurns === 0 || numTurns % 2 === 0) {
    return 'x'
  } else {
    return 'o'
  }
}

// Placing x and o on board and pushing to array game

const placeLetter = function(event) {
  event.preventDefault() // preventing page refresh
  $('.userMessage').text('') // initial user message that goes away
  if ($(this).text() === 'X' || $(this).text() === 'O') {
    return // only one letter per box
  }
  if (whoseTurn() === 'x') { // x on 0 and evens and o on odds
    createx($(this).data('index')) // pushes x to array
    $(this).text('X') // changing board letter to x
  } else {
    createo($(this).data('index'))
    $(this).text('O')
  }
  numTurns++
  checkForWin()
  console.log(game)
  console.log(numTurns)
  console.log(checkForWin())
}
//

// ending game
//
// checking to see who won

// win scenarios

// const xWins = {
//   top: [0, 1, 2],
//   middle: [3, 4, 5],
//   bottom: [6, 7, 8],
//   diagonal1: [0, 4, 8],
//   vertLeft: [0, 3, 6],
//   vertCenter: [1, 4, 7],
//   vertRight: [2, 5, 8],
//   diagonal2: [2, 4, 6]
// }
//
// const oWins = {
//   top: [0, 1, 2],
//   middle: [3, 4, 5],
//   bottom: [6, 7, 8],
//   diagonal1: [0, 4, 8],
//   vertLeft: [0, 3, 6],
//   vertCenter: [1, 4, 7],
//   vertRight: [2, 5, 8],
//   diagonal2: [2, 4, 6]
// }

// checking to see who won based on indexes

const checkForWin = function () {
  if ((game[0] === 'x' && game[1] === 'x' && game[2] === 'x') || (game[3] === 'x' && game[4] === 'x' && game[5] === 'x')
      || (game[6] === 'x' && game[7] === 'x' && game[8] === 'x') || (game[0] === 'x' && game[4] === 'x' && game[8] === 'x')
      || (game[0] === 'x' && game[3] === 'x' && game[6] === 'x') || (game[1] === 'x' && game[4] === 'x' && game[7] === 'x')
      || (game[2] === 'x' && game[5] === 'x' && game[8] === 'x') ||(game[2] === 'x' && game[4] === 'x' && game[6] === 'x')
    ){
    console.log('x wins')
    return
  } else if ((game[0] === 'o' && game[1] === 'o' && game[2] === 'o') || (game[3] === 'o' && game[4] === 'o' && game[5] === 'o')
      || (game[6] === 'o' && game[7] === 'o' && game[8] === 'o') || (game[0] === 'o' && game[4] === 'o' && game[8] === 'o')
      || (game[0] === 'o' && game[3] === 'o' && game[6] === 'o') || (game[1] === 'o' && game[4] === 'o' && game[7] === 'o')
      || (game[2] === 'o' && game[5] === 'o' && game[8] === 'o') ||(game[2] === 'o' && game[4] === 'o' && game[6] === 'o')
  ){
    console.log('o wins')
    return
  }
  else {console.log ('no winner')}
}

// New Game Button

const clearBoard = function() {
  $("#box1").text('.')
  $("#box2").text('.')
  $("#box3").text('.')
  $("#box4").text('.')
  $("#box5").text('.')
  $("#box6").text('.')
  $("#box7").text('.')
  $("#box8").text('.')
  $("#box9").text('.')
}

const clearGameArray = function(){
  game = ['','','','','','','','','']
}

const clearNumTurns = function() {
  numTurns = 0
}
const newGame = function(event) {
  event.preventDefault()
  clearGameArray()
  clearBoard()
  clearNumTurns()
  console.log(game)
  console.log(numTurns)
}

// need a way to push game to storage before clearing everything

module.exports = {
  createx,
  createo,
  placeLetter,
  game,
  newGame,
  clearBoard,
  clearGameArray,
  clearNumTurns,
  numTurns,
  whoseTurn,
  // noRefresh,
  getXIndexes,
  getOIndexes
}
