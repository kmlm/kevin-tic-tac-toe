const store = require('./store')
const gameEngine = require('./gameEngine')

const signUpSuccess = function (data) {
  console.log(data)
  $('#message').text('Thanks! Now please sign in under Welcome Back')
  store.user = data.user
  console.log (store.user)
  $('#new-user-form').hide()
  $('#sign-up-message').hide()
  $('#sign-out-input').show() // need to find a way to unhide signout button
}

const signUpFailure = function (error) {
  console.error(error)
  $('#message').text('Unable to sign up with that information')
}

const signInSuccess = function (data) {
  console.log(data)
  $('#message').text('Signed in sucessfully')
  gameEngine.notSignedIn = false
  store.user = data.user
  console.log(store.user)
  $('#sign-in-form').hide()
  $('#sign-in-message').hide()
  $('#new-user-form').hide()
  $('#sign-up-message').hide()
  $('#sign-out-input').show()
  $('#change-password-button').show()
  console.log(gameEngine.notSignedIn)
}

const signInFailure = function (error) {
  console.error(error)
  $('#message').text('Invalid Password / Username')
}

const signOutSuccess = function () {
  $('.userMessage').text('Thanks for Playing!')
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
  gameEngine.clearGameArray()
  gameEngine.clearBoard()
  gameEngine.clearNumTurns()
  $('.userMessage').text('')
  gameEngine.gameOver = false
  // gameEngine.placeLetter()
  $('#message').text('')
}

// const signOutFailure = function (error) {
//   $('.userMessage').text('You are not signed in')
// }

const changePasswordSuccess = function (data) {
  $('#password-change-message').text('Changed password sucessfully')
  // $('#change-password-message').hide()
  // $('#change-password-form').hide()
  // $('#message').hide()
  console.log('Changed password sucessfully')
}

const changePasswordFailure = function (error) {
  console.log('Unable to change password')
  $('#password-change-message').text('Unable to change password')
}


const createGameSuccess = function (data){
  store.game = data
  console.log(data)
  console.log('tester')
  console.log(store)
}


const createGameFailure = function (error) {
  console.log (error)
}

const addToGameSuccess = function (){
store.game.cells[1]= 'x'
  console.log(data)
  console.log('tester')
}

const addToGameFailure = function (){
  console.log (error)
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
  addToGameSuccess,
  addToGameFailure
}
