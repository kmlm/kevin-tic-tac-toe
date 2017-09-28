const getFormFields = require('/Users/n0252667/wdi/projects/kevin-tic-tac-toe/lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')


const onSignUp = function(event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

// const onSignOut = function(event) {
//   event.preventDefault()
//   api.signOut()
//     .then(ui.signOutSuccess)
//     .catch(ui.signOutFailure)
// }

module.exports = {
  onSignUp,
  // onSignOut
}
