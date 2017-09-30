'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const gameEngine = require('./gameEngine')
const events = require('./events')

$(() => {
  setAPIOrigin(location, config)
})


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

// Reset with new game button and sign out
$(() => {
  $('.new-game-button').on('click', gameEngine.newGame)
  $('#sign-out').on('submit', gameEngine.newGame)

})


// API

$(() => {
 $('#new-user-form').on('submit', events.onSignUp)
 $('#sign-in-form').on('submit', events.onSignIn)
 $('#sign-out').on('submit', events.onSignOut)
 $('#change-password-form').on('submit', events.onChangePassword)
 $('#all-Games-Button').on('click', events.allGames)
 $('#create-game-button').on('click', events.createGame)
 $('#sign-in-form').on('submit', events.createGame)// create new game on sign in
 })

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
