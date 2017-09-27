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
  $("#box1").on('click', gameEngine.placeLetter)
  $("#box2").on('click', gameEngine.placeLetter)
  $("#box3").on('click', gameEngine.placeLetter)
  $("#box4").on('click', gameEngine.placeLetter)
  $("#box5").on('click', gameEngine.placeLetter)
  $("#box6").on('click', gameEngine.placeLetter)
  $("#box7").on('click', gameEngine.placeLetter)
  $("#box8").on('click', gameEngine.placeLetter)
  $("#box9").on('click', gameEngine.placeLetter)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
