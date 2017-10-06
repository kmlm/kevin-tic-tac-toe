const store = require('./store')

const signUpSuccess = function (data) {
  $('#message').text('Thanks! Now please sign in under Sign In')
  store.user = data.user
  $('#new-user-form').hide()
  $('#sign-up-message').hide()
  document.getElementById('new-user-form').reset() // clears fields for input
}

const signUpFailure = function () {
  $('#message').text('Unable to sign up with that information')
  document.getElementById('new-user-form').reset()
}

const signInSuccess = function (data) {
  $('#successMessage').text('Signed in sucessfully')
  $('.password-change').css('display', 'block')
  $('.signOut').css('display', 'block')
  $('.newGame').css('display', 'block')
  store.user = data.user
  $('#sign-in-form').hide()
  $('#sign-in-message').hide()
  $('#new-user-form').hide()
  $('#sign-up-message').hide()
  $('#sign-out-input').show()
  $('.userMessage').text('X goes first so click a square to begin')
  document.getElementById('sign-in-form').reset()
  document.getElementById('create-game-button').click() // triggers new game button to ensure that createGame runs on sign in
}

const signInFailure = function () {
  $('#message').text('Invalid Password / Username')
  document.getElementById('sign-in-form').reset()
}

const signOutSuccess = function () {
  $('.userMessage').text('Thanks for Playing! Sign in if you wish to play again.')
  store.user = null
  $('#sign-in-form').show()
  $('#sign-in-message').show()
  $('#new-user-form').show()
  $('#sign-up-message').show()
  $('.password-change').show()
  $('#change-password-message').show()
  $('#change-password-form').show()
  $('#password-change-message').show()
  $('#password-change-message').text('')
  $('.password-change').css('display', 'none')
  $('.signOut').css('display', 'none')
  $('.newGame').css('display', 'none')
  $('#change-password-button').hide()
  $('#numGames-message').hide()
  $('#message').show()
  $('#message').text('')
  $('#change-password-message').text('Change your password here')
}

const changePasswordSuccess = function (data) {
  $('#password-change-message').show()
  $('#password-change-message').text('Changed password sucessfully')
  $('#successMessage').hide()
  document.getElementById('change-password-form').reset()
}

const changePasswordFailure = function () {
  $('#password-change-message').show()
  $('#password-change-message').text('Unable to change password. Please verify your current password.')
  document.getElementById('change-password-form').reset()
}

const createGameSuccess = function (data) {
  $('.userMessage').text('X goes first so click a square to begin')
  store.game = data
}

const createGameFailure = function () {
}

const addToGameSuccess = function (data) {
  store.game = data
}

const addToGameFailure = function () {
}

const showAllGamesSuccess = function (data) {
  $('#numGames-message').show()
  $('#numGames-message').text('You have played ' + data.games.length + ' games!')
}

const showAllGamesFailure = function () {
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  changePasswordSuccess,
  changePasswordFailure,
  createGameSuccess,
  createGameFailure,
  addToGameSuccess,
  addToGameFailure,
  showAllGamesSuccess,
  showAllGamesFailure
}
