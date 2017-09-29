// const config = require('./config')
// const store = require('./store')
//
// const signUp = function (data) {
//   return $.ajax({
//     url: config.apiOrigin + 'sign-up',
//     method: 'POST',
//     data
//   })
// }
//
// const signIn = function (data) {
//   return $.ajax({
//     url: config.apiOrigin + 'sign-in',
//     method: 'POST',
//     data
//   })
// }
//
// const signOut = function () {
//   return $.ajax({
//     url: config.apiOrigin + 'sign-out/' + store.user.id,
//     method: 'DELETE',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }
//
// const changePassword = function (data) {
//   return $.ajax({
//     url: config.apiOrigin + 'change-password/' + store.user.id,
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data
//   })
// }
//
// const newGame = function (data) {
//     return $.ajax({
//       url: config.apiOrigin + 'games/',
//       method: 'POST',
//       headers: {
//         Authorization: 'Token token=' + store.user.token
//       },
//       data
//     })
// }
//
// const addingMoves = function (data) {
//     return $.ajax({
//       url: config.apiOrigin + 'games/' + store.game.id,
//       method: 'PATCH',
//       headers: {
//         Authorization: 'Token token=' + store.user.token
//       },
//       data
//     })
// }
//
// // const showAllGames = function (data){
// //   return $.ajax({
// //     url: config.apiOrigin + 'games/',
// //     method: 'GET',
// //     headers: {
// //       Authorization: 'Token token=' + store.user.token
// //     },
// //     data
// //   })
// // }
//
// module.exports = {
//   signUp,
//   signIn,
//   signOut,
//   changePassword,
//   newGame,
//   addingMoves
//   // showAllGames
// }
