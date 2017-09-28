// board array that pushing x and o to
let game = [1,2,3,4,5,6,7,8,9]

// pushing x and o
const createx = function(index) {
  game[index] = ('x')
  console.log(game)
}

const createo = function(index) {
  game[index] = ('o')
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
// preventDefault function

// const noRefresh = function (event){
//   event.preventDefault()
// }

// Placing x and o on board and pushing to array game

// const placeLetter = function(event) {
//   event.preventDefault() // preventing page refresh
//   $('.userMessage').text('') // initial user message that goes away
//   if ($(this).text() === 'X' || $(this).text() === 'O') {
//     return // only one letter per box
//   }
//   if (isX(game) === true) { // x on 0 and evens and o on odds
//     createx(0) // pushes x to array
//     $(this).text('X') // changing board letter to x
//   } else {
//     createo()
//     $(this).text('O')
//   }
//   console.log('$(this) is', $(this).text())
// }
//




const placeLetter = function(event) {
  event.preventDefault() // preventing page refresh
  $('.userMessage').text('') // initial user message that goes away
  if ($(this).text() === 'X' || $(this).text() === 'O') {
    return // only one letter per box
  }
  if (isX(game) === true && $(this) === $('#box1')) { // x on 0 and evens and o on odds
    createx(0) // pushes x to box1
    $(this).text('X') // changing board letter to x
  } else if (isX(game) === true && $(this) === '#box2') { // x on 0 and evens and o on odds
    createx(1) // pushes x to box1
    $(this).text('X') // changing board letter to x
  } else if (isX(game) === true && $(this) === '#box3') { // x on 0 and evens and o on odds
    createx(2) // pushes x to box1
    $(this).text('X') // changing board letter to x
  } else if (isX(game) === true && $(this) === '#box4') { // x on 0 and evens and o on odds
    createx(3) // pushes x to box1
    $(this).text('X') // changing board letter to x
  } else if (isX(game) === true && $(this) === '#box5') { // x on 0 and evens and o on odds
    createx(4) // pushes x to box1
    $(this).text('X') // changing board letter to x
  } else if (isX(game) === true && $(this) === '#box6') { // x on 0 and evens and o on odds
    createx(5) // pushes x to box1
    $(this).text('X') // changing board letter to x
  } else if (isX(game) === true && $(this) === '#box7') { // x on 0 and evens and o on odds
    createx(6) // pushes x to box1
    $(this).text('X') // changing board letter to x
  } else if (isX(game) === true && $(this) === '#box8') { // x on 0 and evens and o on odds
    createx(7) // pushes x to box1
    $(this).text('X') // changing board letter to x
  } else if (isX(game) === true && $(this) === '#box9') { // x on 0 and evens and o on odds
    createx(8) // pushes x to box1
    $(this).text('X') // changing board letter to x
  } else if (isX(game) === false && $(this) === '#box1') {
    createo(0)
    $(this).text('O')
  } else if (isX(game) === false && $(this) === '#box2') { // x on 0 and evens and o on odds
    createo(1) // pushes x to box1
    $(this).text('O') // changing board letter to x
  } else if (isX(game) === false && $(this) === '#box3') { // x on 0 and evens and o on odds
    createo(2) // pushes x to box1
    $(this).text('O') // changing board letter to x
  } else if (isX(game) === false && $(this) === '#box4') { // x on 0 and evens and o on odds
    createo(3) // pushes x to box1
    $(this).text('O') // changing board letter to x
  } else if (isX(game) === false && $(this) === '#box5') { // x on 0 and evens and o on odds
    createo(4) // pushes x to box1
    $(this).text('O') // changing board letter to x
  } else if (isX(game) === false && $(this) === '#box6') { // x on 0 and evens and o on odds
    createo(5) // pushes x to box1
    $(this).text('O') // changing board letter to x
  } else if (isX(game) === false && $(this) === '#box7') { // x on 0 and evens and o on odds
    createo(6) // pushes x to box1
    $(this).text('O') // changing board letter to x
  } else if (isX(game) === false && $(this) === '#box8') { // x on 0 and evens and o on odds
    createo(7) // pushes x to box1
    $(this).text('O') // changing board letter to x
  } else if (isX(game) === false && $(this) === '#box9') { // x on 0 and evens and o on odds
    createo(8) // pushes x to box1
    $(this).text('O') // changing board letter to x
  }
  console.log('$(this) is', $(this).text())
}
// ending game

// checking to see who won

const testGame = ['x', 'x', 'x', 4, 5, 6, 7, 8, 9]
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
  game = [1,2,3,4,5,6,7,8,9]
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
  // boardArray,
  newGame,
  clearBoard,
  clearGameArray,
  // noRefresh,
  getXIndexes
}
