var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/users', function (req, res) {
  db.getUsers(req.app.get('connection'))
    .then(function (users) {
      res.render('index', { users: users })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/users', (req, res) => {
  db.addUser(req.body, req.app.get('connection'))
    .then((userId) => {
      res.redirect('/profile/' + userId)
    })
})

router.get('/profile/:id', function (req, res) {
  db.getUser(req.params.id, req.app.get('connection'))
    .then(function (user) {
      res.render('profile', user)
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/', function (req, res) {
  db.getUsers(req.app.get('connection'))
  res.redirect('/users')
})

// router.get('/profile/:id', (req, res) => {
//   const knex = req.app.get('db') // use req.app.get('db') to get the knex connection that was set in server
//     knex('users')
//     .join('profiles', 'users.id', '=', 'profiles.user_id')
//     .select()
// })

module.exports = router
