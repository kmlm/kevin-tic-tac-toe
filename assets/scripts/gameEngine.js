// board array that pushing x and o to
const game = []

// checking for empty board

// const board = {
//   '#box1': ,
//   '#box2': ,
//   '#box3': ,
//   '#box4': ,
//   '#box5': ,
//   '#box6': ,
//   '#box7': ,
//   '#box8': ,
//   '#box9': ,
// }

// const checkBoard = function () {
//   for (let i =0 ; i<board.length i++) {
//     if (board.)
//   }
// }


// pushing x and o
const createx = function (event) {
  event.preventDefault()
  $(this).text('X')
  game.push('x')
  console.log (game)
  console.log(isX)
}

// when to use x --- place x on even or 0 and o on odd
const isX = function (array) {
  if (array.length === 0 || array.length % 2 === 0)
    {return true}
}
// const createo = function (event) {
//   event.preventDefault()
//   $(this).text('O')
//   game.push('o')
//   console.log (game)
// }

// trying to combine x and o function

const placeLetter = function (isX, createx, createo) {
  if (isX(game) === true) {
    createx()}
  else {createo()}
}

// const clickx = function () {
//   if (this  === 'x') {
//     return true
//   } else {
//     return false
//   }
// }

module.exports = {
createx,
// createo,
// placeLetter,
game,
// clickx,
isX
}
