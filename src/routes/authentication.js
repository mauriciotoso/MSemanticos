const express = require("express");
const {isLoggedIn, isNotLoggedIn} = require("../config/auth")
const rutaA = express.Router(); //**lo que hace es redireccionar los pedidos a un Controller correspondiente 

const {
   registrarse,
   registrarsePost,
   iniciarSesion,
   iniciarSesionPost,
   perfil,
   cerrarSesion
} = require("../controllers/authentication")



rutaA.route("/registrarse")
    .get(isNotLoggedIn,registrarse)
    .post(isNotLoggedIn,registrarsePost);

rutaA.route("/iniciarSesion")
    .get(isNotLoggedIn, iniciarSesion)
    .post(isNotLoggedIn, iniciarSesionPost);

rutaA.route("/perfil")
   .get(isLoggedIn, perfil)
rutaA.route("/cerrarSesion")
   .get(isLoggedIn,cerrarSesion)
   


module.exports = rutaA;