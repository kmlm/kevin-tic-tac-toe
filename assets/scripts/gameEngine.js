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
// const isX = function(array) {
//   if (array.length === 0 || array.length % 2 === 0) {
//     return true
//   }
// }

// const isX = function () {
//     let numX = 0;
//     for (let i = 0; i < game.length; i++) {
//         if (game[i] === 'x') {
//             numX++
//         }
//     }
//     return numX;
// }

// const isX = function(array) {
//   let numX = 0
//   for(let i=0;i<array.length;i++){
//       if(array[i] === "x")
//          numX++
//        }
//   if (numX === 0 || numX % 2 === 0) {
//     return true
//   }
// }

// const isX = function(array, val) {
//   let Oindexes = [],
//     i = -1
//   while ((i = array.indexOf(val, i + 1)) != -1) {
//     Oindexes.push(i)
//   }
//   return Oindexes
// }

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

// const testGame = ['x', 'x', 'x', '']
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

// const getXIndexes = function(array, val) {
//   let Xindexes = [],
//     i = -1
//   while ((i = array.indexOf(val, i + 1)) != -1) {
//     Xindexes.push(i)
//   }
//   return Xindexes
// }

const getXIndexes = function() {
  let Xindexes = [],
    i = -1
  while ((i = game.indexOf('x', i + 1)) != -1) {
    Xindexes.push(i)
  }
  return Xindexes
}

// const getOIndexes = function(array, val) {
//   let Oindexes = [],
//     i = -1
//   while ((i = array.indexOf(val, i + 1)) != -1) {
//     Oindexes.push(i)
//   }
//   return Oindexes
// }

const getOIndexes = function() {
  let Oindexes = [],
    i = -1
  while ((i = game.indexOf('o', i + 1)) != -1) {
    Oindexes.push(i)
  }
  return Oindexes
}

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
  // isX,
  newGame,
  clearBoard,
  clearGameArray,
  // noRefresh,
  getXIndexes,
  getOIndexes
}
