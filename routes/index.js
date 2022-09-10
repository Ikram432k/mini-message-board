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
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message board',messages: messages});
});

// GET new page
router.get('/new',function(req,res){
  res.render('form', {title :'Get Author message'})
});

// POST new page
router.post('/new',function(req,res){
  const author_message = req.body.author_message;
  const author_name = req.body.author_name;
  console.log(author_message,author_name);
  messages.push({text:author_message, user: author_name, added: new Date()});
  res.redirect('/');
})
module.exports = router;
