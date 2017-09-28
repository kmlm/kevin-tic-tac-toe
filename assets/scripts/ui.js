const store = require('./store')

const signUpSuccess = function (data) {
  console.log(data)
  $('#message').text('Thanks! Now please sign in under Welcome Back')
  store.user = data.user
  console.log (store.user)
  // console.log(store.user)
  // $('#sign-out-input').detach().attr('text') // need to find a way to unhide signout button
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
}

const signInFailure = function (error) {
  console.error(error)
  $('#message').text('Invalid Password / Username')
}


const signOutSuccess = function () {
  $('#message').text('Thanks for Playing!')
  console.log('Logged out sucessfully')
  store.user = null
  console.log (store.user)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
}
