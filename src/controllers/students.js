const pool = require("../config/database")

exports.agregarAlumnos  = (req, res, next) =>{
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
        codigo_postal = clarreq.body.codigoPostal,
        telefono = req.body.telefono,
        email = req.body.email,
        turno = req.body.turno,
        grado = req.body.grado
    }*/
    //const alumno = await pool.query("INSERT INTO alumnos SET ?", [newAlumno]);
    
}

exports.guardarAlumnos = async (req, res, next) =>{
    console.log("entro guardarAlumnos Controller")
    try {

        /*const institutos = await pool.query("SELECT * FROM institutos WHERE cue = ?",[cue]);
        const institutoUno = institutos[0];

        const newBeca = {
            posee_enfermedad = 
            estado =
            tipo = 
            diferencia_ingreso_gastos = 
        


        const newAlumno = {
            apellidos = req.body.apellidos,
            nombres = req.body.nombre,
            dni = req.body.dni,
            cuil = req.body.cuil,
            fecha_nacimiento = req.body.fechaNacimiento,
            nacionalidad = req.body.nacionalidad,
            domicilio = req.body.domicilio,
            localidad = req.body.localidad,
            codigo_postal = clarreq.body.codigoPostal,
            telefono = req.body.telefono,
            email = req.body.email,
            turno = req.body.turno,
            grado = req.body.grado,
            nro_beca = 
            nro_instituto = institutoUno.cue
        }}*/

        const alumno = await pool.query("INSERT INTO alumnos SET ?", [req.body]);
        console.log("registro hecho " + alumno)
        res.render("students/list");
      } catch (err) {
        throw err;
      }
   
}

exports.getAllAlumnos = (req, res, next) =>{
    res.render("students/list")
}

exports.editarAlumnos = (req, res, next) =>{
    
}

exports.guardarAlumnosEditados = (req, res, next) => {
    //res.redirect("")
}
