//
// const boxes = ['#box1','#box2','#box3','#box4','#box5',
//                 '#box5','#box6','#box7','#box8','#box9']

// const createx = function (event, this) {
//   event.preventDefault()
//   $(boxes[this]).text('X')
// }

const game = []

const createx = function (event) {
  event.preventDefault()
  $(this).text('X')
  game.push('x')
  console.log (game)
}

const createo = function (event) {
  event.preventDefault()
  $(this).text('O')
  game.push('x')
  console.log (game)
}


// const placeLetter = function ()


module.exports = {
createx,
createo,
// placeLetter,
// boxes,
game
}
