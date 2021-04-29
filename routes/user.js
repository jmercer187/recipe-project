const express = require('express');

const router = express.Router();

router.get('/add-recipe', (req, res, next) => {
    res.send('<form action="/user/add-recipe" method="POST"><input type="text" name="title"><button type="submit">Add Recipe</button></form>');
});

router.post('/add-recipe', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})

module.exports = router;