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
//
// const gameEnd = function () {
//   if (game.length === 9)
//
// }
// checking to see who won

// win scenarios


const xWins = {

'top': ['x', 'x', 'x', 4, 5, 6, 7, 8, 9],
'middle': [1, 2, 3, 'x', 'x', 'x', 7, 8, 9],
'bottom': [1, 2, 3, 4, 5, 6, 'x', 'x', 'x'],
'diagonal1': ['x', 2, 3, 4, 'x', 6, 7, 8, 'x'],
'vertLeft': ['x', 2, 3, 'x', 5, 6, 'x', 8, 9],
'vertCenter': [1, 'x', 3, 4, 'x', 6, 7, 'x', 9],
'vertRight': [1, 2, 'x', 4, 5, 'x', 7, 8, 'x'],
'diagonal2': [1, 2, 'x', 4, 'x', 6, 'x', 8, 9]
}

const oWins = {

'top': ['o', 'o', 'o', 4, 5, 6, 7, 8, 9],
'middle': [1, 2, 3, 'o', 'o', 'o', 7, 8, 9],
'bottom': [1, 2, 3, 4, 5, 6, 'o', 'o', 'o'],
'diagonal1': ['o', 2, 3, 4, 'o', 6, 7, 8, 'o'],
'vertLeft': ['o', 2, 3, 'o', 5, 6, 'o', 8, 9],
'vertCenter': [1, 'o', 3, 4, 'o', 6, 7, 'o', 9],
'vertRight': [1, 2, 'o', 4, 5, 'o', 7, 8, 'o'],
'diagonal2': [1, 2, 'o', 4, 'o', 6, 'o', 8, 9]
}

// const winCheck = function (game) {
//   if
// }
// const boardArray = [$('#box1'), $('#box2'), $('#box3'), $('#box4'), $('#box5'),
//   $('#box6'), $('#box7'), $('#box8'), $('#box9')
// ]

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
  // noRefresh
}
