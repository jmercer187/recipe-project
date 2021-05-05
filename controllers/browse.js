const pageTitle = 'Browse Recipes'

exports.getBrowse = (req, res) => {
    res.render('home', {
        pageTitle
    });
};