const getFormFields = require('/Users/n0252667/wdi/projects/kevin-tic-tac-toe/lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const gameEngine = require('./gameEngine')

const onSignUp = function(event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function(event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function(event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function(event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const createGame = function(event) {
      event.preventDefault()
      if ($('.userMessage').text() !== 'X goes first so click a square to begin' && $('.userMessage').text() !== ''
              && $('.userMessage').text() !== 'X WINS!'
              && $('.userMessage').text() !== 'O WINS!'
              && $('.userMessage').text() !== 'This game is over. Click the button above to start a new game or Sign Out'
              && $('.userMessage').text() !== 'Tic Tac Tie!'){
        return // need to be signed in to play -- looks at messages to determine to make global
      }
        console.log('create ran')
        const data = gameEngine.game
        api.newGame(data)
        .then(ui.createGameSuccess)
        .catch(ui.createGameFailure)
        console.log(data)
      }

const allGames = function (event){
  event.preventDefault()
  console.log ('all games worked')
  api.showAllGames()
  .then(ui.showAllGamesSuccess)
  .catch(ui.showAllGamesFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  createGame,
  allGames
}
