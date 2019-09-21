exports.getLogin = (req, res) => {
    res.render('auth/login', {
        pagetitle: 'Login',
    });
};

exports.getSignup = (req, res) => {
    res.render('auth/signup', {
        pagetitle: 'Signup'
    });
};