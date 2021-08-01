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

        const institutos = await pool.query("SELECT * FROM institutos WHERE cue = ?",[cue]);
        const institutoUno = institutos[0];

        const newBeca = {
            posee_enfermedad : req.body.enfermedadCronica,
            estado : null,
            tipo : null,
            diferencia_ingreso_gastos : null,
        }

        const newAlumno = {
            apellidos : req.body.apellidos,
            nombres : req.body.nombre,
            dni : req.body.dni,
            cuil : req.body.cuil,
            fecha_nacimiento : req.body.fechaNacimiento,
            nacionalidad : req.body.nacionalidad,
            domicilio : req.body.domicilio,
            localidad : req.body.localidad,
            codigo_postal : clarreq.body.codigoPostal,
            telefono : req.body.telefono,
            email : req.body.email,
            turno : req.body.turno,
            grado : req.body.grado,
            //nro_beca = 
            nro_instituto : institutoUno.cue
        }

        const newPadre = {
            apellidos : req.body.apellidoP,
            nombres : req.body.nombreP,
            edad : req.body.edadP,
            ocupacion : req.body.ocupacionP,
            lugar_trabajo: req.body.lugarTrabajoP,
            ingresos: req.body.ingresoP,
            convive : req.body.conviveP,
        }

        const newMadre = {
            apellidos : req.body.apellidoM,
            nombres : req.body.nombreM,
            edad : req.body.edadM,
            lugar_trabajo: req.body.lugarTrabajoM,
            ingresos: req.body.ingresoM,
            convive : req.body.conviveM,
        }

        const newHermano1 = {
            apellidos : req.body.apellidoH1,
            nombres : req.body.nombreH1,
            edad : req.body.edadH1,
            ocupacion : req.body.ocupacionH1,
            escuela : req.body.escuelaH1,
            convive : req.body.conviveH1,
        }

        const newHermano2 = {
            apellidos : req.body.apellidoH2,
            nombres : req.body.nombreH2,
            edad : req.body.edadH2,
            ocupacion : req.body.ocupacionH2,
            escuela : req.body.escuelaH2,
            convive : req.body.conviveH2,
        }

        const newHermano3 = {
            apellidos : req.body.apellidoH3,
            nombres : req.body.nombreH3,
            edad : req.body.edadH3,
            ocupacion : req.body.ocupacionH3,
            escuela : req.body.escuelaH3,
            convive : req.body.conviveH3,
        }

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
