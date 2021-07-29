const express = require('express');
const app = express();
const port = 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');

// home page
app.get('/', (req, res) => {
  // render `home.ejs`
  res.render('home', {
    title: 'Hello World'
  });
});

// start express app on port 3000
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});