var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'mini board message', messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('form', { title: 'mini board message', messages: messages });
});

router.post('/new', function(req, res, next) {
  console.log('IDEMO post', req.body.author, req.body.text)
  messages.push({text: req.body.text, user: req.body.author, added: new Date()});
  res.redirect('/')
});

module.exports = router;
