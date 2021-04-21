const express = require('express');
const app = express();

const people = require('./routes/people.js');
const auth = require('./routes/auth.js');

// static assets
app.use(express.static('./methods-public'));
// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());

// routing
app.use('/api/people', people);
app.use('/login', auth);

app.listen(5000, () => {
  console.log('Server is listening on port 5000....');
});
