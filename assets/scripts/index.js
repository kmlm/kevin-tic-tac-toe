'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const gameEngine = require('./gameEngine')

$(() => {
  setAPIOrigin(location, config)
})
// Changing box to X or O

$(() => {
  $("#box1").on('click', gameEngine.createx)
  $("#box2").on('click', gameEngine.createx)
  $("#box3").on('click', gameEngine.createx)
  $("#box4").on('click', gameEngine.createx)
  $("#box5").on('click', gameEngine.createx)
  $("#box6").on('click', gameEngine.createx)
  $("#box7").on('click', gameEngine.createx)
  $("#box8").on('click', gameEngine.createx)
  $("#box9").on('click', gameEngine.createx)
})


// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
