// Create web server
// 1. Require express
// 2. Create an express app
// 3. Create a GET route
// 4. Create a POST route

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const comments = [
  { username: 'Todd', comment: 'lol so funny' },
  { username: 'Skyler', comment: 'I like to go birdwatching with my dog' },
  { username: 'Sk8erBoi', comment: 'Plz delete your account, Todd' },
  { username: 'onlysayswoof', comment: 'woof woof woof' }
];

app.use(bodyParser.json());

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  console.log(req.body);
  comments.push(req.body);
  res.json({ status: 'success', message: 'Comment added!' });
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});