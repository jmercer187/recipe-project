const path = require('path');

const express = require('express');

const user = require('./routes/user');
const browse = require('./routes/browse');
const errorController = require('./controllers/errors');

const { appendFileSync } = require('fs');

const app = express();
console.log("it has begun");

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './public')));

app.use(browse);
app.use(user);
app.use(errorController.get404);

app.listen(3000);