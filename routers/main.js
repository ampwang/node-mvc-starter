const express = require('express');
const router = express.Router();

const users = [];

router.get('/', (req, res) => {
  res.render('main', { pageTitle: 'Main'});
});

router.post('/', (req, res) => {
  users.push(req.body.name);
  console.log(users);
  // res.redirect('/users');
});

exports.routes = router;
exports.users = users;