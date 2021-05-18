const passport = require("passport")

exports.registrarse = (req, res, next) => {
    res.render("auth/signup");
}

exports.registrarsePost = passport.authenticate('local.signup', { 
    successRedirect: '/perfil',
    failureRedirect: '/registrarse',
    failureFlash: true 
});

exports.iniciarSesion = (req, res, next) => {
    res.render("auth/signin");
}

exports.iniciarSesionPost = passport.authenticate('local.signin', { 
    successRedirect: '/perfil',
    failureRedirect: '/iniciarSesion',
    failureFlash: true 
});

exports.perfil = (req, res, next) => {
    res.render("profile")
}

exports.cerrarSesion = (req, res, next) => {
    req.logOut();
    console.log("cerró sesion")
    res.redirect("/iniciarSesion")
}