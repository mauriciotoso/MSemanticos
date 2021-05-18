const express = require("express");
const ruta = express.Router(); //**lo que hace es redireccionar los pedidos a un Controller correspondiente 

const {
    home
} = require("../controllers/index.js");


ruta.route("/")
    .get(home);

module.exports = ruta;