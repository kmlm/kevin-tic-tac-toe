// board array that pushing x and o to
const game = []

// pushing x and o
const createx = function () {
  game.push('x')
  console.log (game)
}

const createo = function () {
  game.push('o')
  console.log (game)
}

// when to use x or o --- place x on even or 0 and o on odd

const isX = function (array) {
  if (array.length === 0 || array.length % 2 === 0)
    {return true}
}

// Placing x and o on board and pushing to array game

const placeLetter = function (event) {
  event.preventDefault()
  if (isX(game) === true) {
    createx()
    $(this).text('X')
  }
  else {createo()
        $(this).text('O')}
}


module.exports = {
createx,
createo,
placeLetter,
game,
isX
}
