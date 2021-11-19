const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const toDoListRouter = require('./routes/toDoListRouter');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('server/public'));

// Routes
app.use( '/toDoList', toDoListRouter);

// Starts the server, and listens for requests:
app.listen(PORT, () => {
  console.log('listening on port', PORT)
});