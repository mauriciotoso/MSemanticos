const express = require("express");
const {isLoggedIn, isNotLoggedIn} = require("../config/auth")
const rutaS = express.Router(); //**lo que hace es redireccionar los pedidos a un Controller correspondiente 

const  {
    getAllAlumnos,
    editarAlumnos,
    agregarAlumnos,
    guardarAlumnos,
    guardarAlumnosEditados,
    //eliminarAlumnos

} = require("../controllers/students")

rutaS.use(isLoggedIn)


rutaS.route("/agregar")
    .get(agregarAlumnos)
    .post(guardarAlumnos)

rutaS.route("/editar/:id")
    .get(editarAlumnos)
    .post(guardarAlumnosEditados)

rutaS.route("/listado")
    .get(getAllAlumnos)

/*rutaS.route("/eliminar/:id")
    .get(eliminarAlumnos)*/



module.exports = rutaS;