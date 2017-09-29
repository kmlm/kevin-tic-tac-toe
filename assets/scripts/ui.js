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
  store.user = data.user
  console.log(store.user)
  $('#sign-in-form').hide()
  $('#sign-in-message').hide()
  $('#new-user-form').hide()
  $('#sign-up-message').hide()
  $('#sign-out-input').show()
  $('#change-password-button').show()
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
  $('#sign-out-input').hide()
  gameEngine.clearGameArray()
  gameEngine.clearBoard()
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
}
