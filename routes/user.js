const express = require('express');

const router = express.Router();

const userController = require('../controllers/user')

router.get('/add-recipe', userController.getAddRecipe);

router.post('/add-recipe', userController.postAddRecipe);

module.exports = router;