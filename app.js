const path = require('path');

const express = require('express');

const app = express();

const userRoutes = require('./routes/user');
const browseRoutes = require('./routes/browse');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './public')));

app.use('/user', userRoutes);
app.use(browseRoutes);

app.use((req, res, next) => {
    res.status(404)
        .send('<h2>Page Not Found</h2>');
})

app.listen(3000);