const store = require('./store')
const gameEngine = require('./gameEngine')

const signUpSuccess = function (data) {
  console.log(data)
  $('#message').text('Thanks! Now please sign in under Welcome Back')
  store.user = data.user
  console.log (store.user)
  $('#new-user-form').hide()
  $('#sign-up-message').hide()
  $('#sign-out-input').show()
  document.getElementById('new-user-form').reset() // need to find a way to unhide signout button
}

const signUpFailure = function (error) {
  console.error(error)
  $('#message').text('Unable to sign up with that information')
  document.getElementById('new-user-form').reset()
}

const signInSuccess = function (data) {
  console.log(data)
  $('#message').text('Signed in sucessfully')
  store.user = data.user
  console.log(store.user)
  $('#sign-in-form').hide()
  $('#sign-in-message').hide()
  $('#new-user-form').hide()
  $('#sign-up-message').hide()
  $('#sign-out-input').show()
  // $('password-change').css('display', 'inherit')
  $('.userMessage').text('X goes first so click a square to begin')
  document.getElementById('sign-in-form').reset()
}

const signInFailure = function (error) {
  console.error(error)
  $('#message').text('Invalid Password / Username')
  document.getElementById('sign-in-form').reset()
}

const signOutSuccess = function () {
  $('.userMessage').text('Thanks for Playing! Sign in if you wish to play again.')
  console.log('Logged out sucessfully')
  store.user = null
  console.log (store.user)
  $('#sign-in-form').show()
  $('#sign-in-message').show()
  $('#new-user-form').show()
  $('#sign-up-message').show()
  $('.password-change').show()
  $('#change-password-message').show()
  $('#change-password-form').show()
  $('#message').hide()
  $('#sign-out-input').hide()
  $('#change-password-button').hide()
  $('#password-change-message').hide()
  $('#message').text('')
  $('#change-password-message').text('Change your password here')
}

const changePasswordSuccess = function (data) {
  $('#password-change-message').text('Changed password sucessfully')
  $('#change-password-message').hide()
  $('#change-password-form').hide()
  $('#message').hide()
  document.getElementById('change-password-form').reset()
  console.log('Changed password sucessfully')
  console.log($('password-change').css())
}

const changePasswordFailure = function (error) {
  console.log('Unable to change password')
  $('#change-password-message').text('Unable to change password. Please verify you are signed in and try again.')
  document.getElementById('change-password-form').reset()
}

const createGameSuccess = function (data){
  console.log('data is',data)
  store.game = data
  console.log(store)
  console.log(store.game)
}

const createGameFailure = function (error) {
  console.log (error)
}
//
// const addToGameSuccess = function (data){
//   console.log('ui success ran')
//   store.game = data
//   console.log(data)
// }
//
// const addToGameFailure = function (error){
//   console.log('ui failure ran')
//   console.log (error)
// }

const showAllGamesSuccess = function (data){
  $('.userMessage').text('You have played ' + data.games.length +' games!')
  console.log('data is', data.games.length)
  console.log('tester')
}

const showAllGamesFailure = function (error){
  console.log(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  // signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  createGameSuccess,
  createGameFailure,
  // addToGameSuccess,
  // addToGameFailure,
  showAllGamesSuccess,
  showAllGamesFailure
}
