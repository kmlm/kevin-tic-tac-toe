const store = require('./store')

const signUpSuccess = function (data) {
  console.log(data)
  $('#message').text('Signed up sucessfully')
  $('#sign-out-input').detach().attr('text') // need to find a way to unhide signout button
}

const signUpFailure = function (error) {
  console.error(error)
  $('#message').text('Unable to sign up with that information')
}

const signOutSuccess = function () {
  $('#message').text('Logged out sucessfully')
  console.log('Logged out sucessfully')
  store.user = null
  console.log (store.user)
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signOutSuccess,
}
