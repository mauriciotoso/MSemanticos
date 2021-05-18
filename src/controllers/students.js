//const pool = require("./database")
exports.agregarAlumnos = (req, res, next) =>{
    res.render("students/add")
    /*const newAlumno = {
        apellidos = req.body.apellidos,
        nombres = req.body.nombre,
        dni = req.body.dni,
        cuil = req.body.cuil,
        fecha_nacimiento = req.body.fechaNacimiento,
        nacionalidad = req.body.nacionalidad,
        domicilio = req.body.domicilio,
        localidad = req.body.localidad,
        codigo_postal = req.body.codigoPostal,
        telefono = req.body.telefono,
        email = req.body.email,
        turno = req.body.turno,
        grado = req.body.grado
    }
    const alumno = await pool.query("INSERT INTO alumnos SET ?", [newAlumno]);*/

}

exports.guardarAlumnos = (req, res, next) =>{
    
}

exports.getAllAlumnos = (req, res, next) =>{
    res.render("students/list")
}

exports.editarAlumnos = (req, res, next) =>{
    
}

exports.guardarAlumnosEditados = (req, res, next) => {
    //res.redirect("")
}


/*exports.eliminarAlumnos( (req, res, next){
     res.redirect("/links")
})*/