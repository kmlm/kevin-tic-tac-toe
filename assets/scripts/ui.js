const store = require('./store')

const signUpSuccess = function (data) {
  console.log(data)
  $('#message').text('Signed up sucessfully')
}

const signUpFailure = function (error) {
  console.error(error)
  $('#message').text('Unable to sign up with that information')
}

module.exports = {
  signUpSuccess,
  signUpFailure
}
