exports.getHome = (req, res) => {
    res.render('main/home', {
        pagetitle: 'College Mate'
    });
}