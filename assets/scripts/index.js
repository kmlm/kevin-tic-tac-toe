'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const gameEngine = require('./gameEngine')

$(() => {
  setAPIOrigin(location, config)
})

// $(() => {
//   $("#xInBox").on('click', gameEngine.clickx)
//   $("#oInBbox").on('click', gameEngine.clickx)
// })

// Changing box to X or O

$(() => {
  $("#box1").on('click', gameEngine.placeLetter(1, event))
  $("#box2").on('click', gameEngine.placeLetter(2, event))
  $("#box3").on('click', gameEngine.placeLetter(3, event))
  $("#box4").on('click', gameEngine.placeLetter(4, event))
  $("#box5").on('click', gameEngine.placeLetter(5, event))
  $("#box6").on('click', gameEngine.placeLetter(6, event))
  $("#box7").on('click', gameEngine.placeLetter(7, event))
  $("#box8").on('click', gameEngine.placeLetter(8, event))
  $("#box9").on('click', gameEngine.placeLetter(9, event))
})

$(() => {
  $('.new-game-button').on('click', gameEngine.newGame)
})
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
