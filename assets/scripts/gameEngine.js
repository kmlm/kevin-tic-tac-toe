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
  console.log(game)
  console.log(numTurns)
}
//

// ending game
//
// checking to see who won

// win scenarios

const xWins = {
  top: [0, 1, 2],
  middle: [3, 4, 5],
  bottom: [6, 7, 8],
  diagonal1: [0, 4, 8],
  vertLeft: [0, 3, 6],
  vertCenter: [1, 4, 7],
  vertRight: [2, 5, 8],
  diagonal2: [2, 4, 6]
}

const oWins = {
  top: [0, 1, 2],
  middle: [3, 4, 5],
  bottom: [6, 7, 8],
  diagonal1: [0, 4, 8],
  vertLeft: [0, 3, 6],
  vertCenter: [1, 4, 7],
  vertRight: [2, 5, 8],
  diagonal2: [2, 4, 6]
}

// getting index of x or o from game array

const getXIndexes = function() {
  let Xindexes = [],
    i = -1
  while ((i = game.indexOf('x', i + 1)) != -1) {
    Xindexes.push(i)
  }
  return Xindexes
}

const getOIndexes = function() {
  let Oindexes = [],
    i = -1
  while ((i = game.indexOf('o', i + 1)) != -1) {
    Oindexes.push(i)
  }
  return Oindexes
}

// checking to see who won based on indexes

const checkForWin = function () {
  if (getXIndexes().toString() === xWins.top.toString() || getXIndexes().toString() === xWins.middle.toString() || getXIndexes().toString() === xWins.bottom.toString() ||
    getXIndexes().toString() === xWins.diagonal1.toString() || getXIndexes().toString() === xWins.vertLeft.toString() || getXIndexes().toString() === xWins.vertCenter.toString() ||
    getXIndexes().toString() === xWins.vertRight.toString() || getXIndexes().toString() === xWins.diagonal2.toString()) {
    console.log('x wins')
    return
  } else if (getOIndexes().toString() === oWins.top.toString() || getOIndexes().toString() === oWins.middle.toString() || getOIndexes().toString() === oWins.bottom.toString() ||
    getOIndexes().toString() === oWins.diagonal1.toString() || getOIndexes().toString() === oWins.vertLeft.toString() || getOIndexes().toString() === oWins.vertCenter.toString() ||
    getOIndexes().toString() === oWins.vertRight.toString() || getOIndexes().toString() === oWins.diagonal2.toString()) {
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

const clearNumTurn = function() {
  numTurn = 0
}
const newGame = function(event) {
  event.preventDefault()
  clearGameArray()
  clearBoard()
  clearNumTurn()
  console.log(game)
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
  clearNumTurn,
  numTurn,
  whoseTurn,
  // noRefresh,
  getXIndexes,
  getOIndexes
}
