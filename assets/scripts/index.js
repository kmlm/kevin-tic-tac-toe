'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const gameEngine = require('./gameEngine')
const events = require('./events')

$(() => {
  setAPIOrigin(location, config)
})

// $(() => {
//   $("#xInBox").on('click', gameEngine.clickx)
//   $("#oInBbox").on('click', gameEngine.clickx)
// })

// Changing box to X or O

// $(() => {
//   $("#box1").on('click', gameEngine.placeLetter(0))
//   $("#box2").on('click', gameEngine.placeLetter(1))
//   $("#box3").on('click', gameEngine.placeLetter(2))
//   $("#box4").on('click', gameEngine.placeLetter(3))
//   $("#box5").on('click', gameEngine.placeLetter(4))
//   $("#box6").on('click', gameEngine.placeLetter(5))
//   $("#box7").on('click', gameEngine.placeLetter(6))
//   $("#box8").on('click', gameEngine.placeLetter(7))
//   $("#box9").on('click', gameEngine.placeLetter(8))
// })

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

// Reset with new game button
$(() => {
  $('.new-game-button').on('click', gameEngine.newGame)
})


// API

$(() => {
 $('#new-user-form').on('submit', events.onSignUp)
 $('#sign-in-form').on('submit', events.onSignIn)
 $('#sign-out').on('submit', events.onSignOut)
 })

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
