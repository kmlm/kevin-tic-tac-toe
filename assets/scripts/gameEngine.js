
const events = require('./events')

// board array that pushing x and o to
let game = ['', '', '', '', '', '', '', '', '']
let gameOver = false
let numTurns = 0

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
  $('#message').hide() // hides sign in successfull message when first box clicked
  events.createGame()
  $('.userMessage').text('') // initial user instruction that goes away
  if (gameOver) { // whether clicks should be firing -- should not if game is over
    console.log('did it work?')
    $('.userMessage').text('This game is over. Click the button below to start a new game.')
    return
  }
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
  console.log(gameOver)
}

// ENDING GAME

// checking to see who won based on indexes

const checkForWin = function() {
  if ((game[0] === 'x' && game[1] === 'x' && game[2] === 'x') || (game[3] === 'x' && game[4] === 'x' && game[5] === 'x') ||
    (game[6] === 'x' && game[7] === 'x' && game[8] === 'x') || (game[0] === 'x' && game[4] === 'x' && game[8] === 'x') ||
    (game[0] === 'x' && game[3] === 'x' && game[6] === 'x') || (game[1] === 'x' && game[4] === 'x' && game[7] === 'x') ||
    (game[2] === 'x' && game[5] === 'x' && game[8] === 'x') || (game[2] === 'x' && game[4] === 'x' && game[6] === 'x')
  ) {
    console.log('x wins')
    $('.userMessage').text('X WINS!')
    gameOver = true
    return
  } else if ((game[0] === 'o' && game[1] === 'o' && game[2] === 'o') || (game[3] === 'o' && game[4] === 'o' && game[5] === 'o') ||
    (game[6] === 'o' && game[7] === 'o' && game[8] === 'o') || (game[0] === 'o' && game[4] === 'o' && game[8] === 'o') ||
    (game[0] === 'o' && game[3] === 'o' && game[6] === 'o') || (game[1] === 'o' && game[4] === 'o' && game[7] === 'o') ||
    (game[2] === 'o' && game[5] === 'o' && game[8] === 'o') || (game[2] === 'o' && game[4] === 'o' && game[6] === 'o')
  ) {
    console.log('o wins')
    $('.userMessage').text('O WINS!')
    gameOver = true
    return
  } else {
    console.log('no winner')
  }
  if (numTurns === 9) {
    $('.userMessage').text('Tic Tac Tie!')
    gameOver = true
  }
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

const clearGameArray = function() {
  game = ['', '', '', '', '', '', '', '', '']
}

const clearNumTurns = function() {
  numTurns = 0
}
const newGame = function(event) {
  event.preventDefault()
  clearGameArray()
  clearBoard()
  clearNumTurns()
  $('.userMessage').text('')
  console.log(game)
  console.log(numTurns)
  gameOver = false
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
  gameOver
}
