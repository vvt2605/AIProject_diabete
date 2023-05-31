const express = require('express');
const app = express();
const exhbs = require('express-handlebars');
const path = require('path');
const hbs = require('handlebars');
const morgan = require('morgan');
const port = process.env.PORT || 3000;

// Register handlebars helper
hbs.registerHelper("subtr", function(a, b) {
  return a - b;
});

// Use Morgan for HTTP request logging
app.use(morgan('tiny'));

// Set the view engine
app.set('view engine', 'hbs');
app.engine('hbs', exhbs.engine({
  defaultLayout: 'main',
  extname: '.hbs'
}));

// Set the views path
app.set('views', path.join(__dirname, 'views'));

// Import the router
const router = require('./routes');

// Serve static files from the "public/img" directory
app.use(express.static(path.join(__dirname, 'public', 'img')));

// Parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Use the router
router(app);

// Start the server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
