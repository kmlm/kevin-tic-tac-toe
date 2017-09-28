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

// const isX = function(array) {
//   if (array.length === 0 || array.length % 2 === 0) {
//     return true
//   }
// }

const isX = function(array) {
  let numX = 0
  for(let i=0;i<array.length;i++){
      if(array[i] === "x")
         numX++
    }
  if (numX === 0 || numX % 2 === 0) {
    return true
  }
}

// Placing x and o on board and pushing to array game

const placeLetter = function(event) {
  event.preventDefault() // preventing page refresh
  $('.userMessage').text('') // initial user message that goes away
  if ($(this).text() === 'X' || $(this).text() === 'O') {
    return // only one letter per box
  }
  if (isX(game) === true) { // x on 0 and evens and o on odds
    createx($(this).data('index')) // pushes x to array
    $(this).text('X') // changing board letter to x
  } else {
    createo($(this).data('index'))
    $(this).text('O')
  }
  console.log(game)
  console.log(isX)
}
//


// ending game
//
// checking to see who won

const testGame = ['x', 'x', 'x', '']
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


const getXIndexes = function(array, val) {
  let Xindexes = [],
    i = -1
  while ((i = array.indexOf(val, i + 1)) != -1) {
    Xindexes.push(i)
  }
  return Xindexes
}

const getOIndexes = function(array, val) {
  let Oindexes = [],
    i = -1
  while ((i = array.indexOf(val, i + 1)) != -1) {
    Oindexes.push(i)
  }
  return Oindexes
}

const checkForWin = function(array) {
  getXIndexes(array, 'x')
  getOIndexes(array, 'o')
  if (Xindexes === xWins.top || Xindexes === xWins.middle || Xindexes === xWins.bottom ||
    Xindexes === xWins.diagonal1 || Xindexes === xWins.vertLeft || Xindexes === xWins.vertCenter ||
    Xindexes === xWins.vertRight || Xindexes === xWins.diagonal2) {
    console.log('x wins')
    return
  } else if (Oindexes === oWins.top || Oindexes === oWins.middle || Oindexes === oWins.bottom ||
    Oindexes === oWins.diagonal1 || Oindexes === oWins.vertLeft || Oindexes === oWins.vertCenter ||
    Oindexes === oWins.vertRight || Oindexes === oWins.diagonal2) {
    console.log('o wins')
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

const clearGameArray = function(){
  game = ['','','','','','','','','']
}

const newGame = function(event) {
  event.preventDefault()
  clearGameArray()
  clearBoard()
  console.log(game)
}

// need a way to push game to storage before clearing everything


module.exports = {
  createx,
  createo,
  placeLetter,
  game,
  isX,
  newGame,
  clearBoard,
  clearGameArray,
  // noRefresh,
  getXIndexes,
  getOIndexes
}
