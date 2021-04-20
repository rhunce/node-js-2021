const express = require('express');
const path = require('path');
const app = express();

// set up static and middleware
app.use(express.static('./public'));

// app.get('/', (req, res) => {
//   res.status(200).sendFile(path.resolve(__dirname, './navbar-app/index.html'));
// });

app.all('*', (req, res) => {
  res.status(404).send('Page Not Found');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}....`);
});
