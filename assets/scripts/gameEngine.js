//
// const game = []
//
// const createx = function (event) {
//   event.preventDefault()
//   $(this).text('X')
//   game.push('x')
//   console.log (game)
// }
//
// }
// const createo = function (event) {
//   event.preventDefault()
//   $(this).text('O')
//   game.push('o')
//   console.log (game)
// }
// //
// const placeLetter = function (clickx) {
//   if (clickx === true) {
//     createx()
//   }
//   else {createo()}
// }

const clickx = function () {
  if (this  === 'x') {
    return true
  } else {
    return false
  }
}

module.exports = {
// createx,
// createo,
// placeLetter,
// game,
clickx
}
