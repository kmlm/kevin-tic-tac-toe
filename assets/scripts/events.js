// const getFormFields = require('/Users/n0252667/wdi/projects/kevin-tic-tac-toe/lib/get-form-fields')
// const api = require('./api')
// const ui = require('./ui')
// const gameEngine = require('./gameEngine')
//
// const onSignUp = function(event) {
//   const data = getFormFields(this)
//   event.preventDefault()
//   api.signUp(data)
//     .then(ui.signUpSuccess)
//     .catch(ui.signUpFailure)
// }
//
// const onSignIn = function(event) {
//   const data = getFormFields(this)
//   event.preventDefault()
//   api.signIn(data)
//     .then(ui.signInSuccess)
//     .catch(ui.signInFailure)
// }
//
// const onSignOut = function(event) {
//   event.preventDefault()
//   api.signOut()
//     .then(ui.signOutSuccess)
//     .catch(ui.signOutFailure)
// }
//
// const onChangePassword = function(event) {
//   const data = getFormFields(this)
//   event.preventDefault()
//   api.changePassword(data)
//     .then(ui.changePasswordSuccess)
//     .catch(ui.changePasswordFailure)
// }
//
// const createGame = function() {
//   const data = gameEngine.game
//   api.newGame(data)
//   .then(ui.createGameSuccess)
//   .catch(ui.createGameFailure)
// }
//
// const addToGame = function (){
//   const data = gameEngine.game
//   api.addingMoves(data)
//   .then(ui.createGameSuccess)
//   .catch(ui.createGameFailure)
// }
// //
// // const allGames = function (event){
// //   event.preventDefault()
// //   const data = gameEngine.game
// //   api.showAllGames(data)
// //   .then(ui.showAllGamesSuccess)
// //   .catch(ui.showAllGamesFailure)
// // }
//
// module.exports = {
//   onSignUp,
//   onSignIn,
//   onSignOut,
//   onChangePassword,
//   createGame,
//   addToGame
//   // allGames
// }
