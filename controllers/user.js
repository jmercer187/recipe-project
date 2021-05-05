const pageTitle = 'Add a Recipe';

exports.getAddRecipe = (req, res) => {
    res.render('add-recipe', {
        pageTitle
    });
};

exports.postAddRecipe = (req, res) => {
    console.log(req.body);
    res.redirect('/');
};
