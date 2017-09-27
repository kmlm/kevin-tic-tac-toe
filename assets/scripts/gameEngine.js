//
// const boxes = ['#box1','#box2','#box3','#box4','#box5',
//                 '#box5','#box6','#box7','#box8','#box9']

// const createx = function (event, this) {
//   event.preventDefault()
//   $(boxes[this]).text('X')
// }

//

const createx = function (event) {
  event.preventDefault()
  $(this).text('X')
}

const createo = function (event) {
  event.preventDefault()
  $(this).text('O')
}

// const placeLetter = function ()


module.exports = {
createx,
createo,
// placeLetter,
boxes
}
