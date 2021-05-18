const bcrypt = require("bcryptjs")
const validar = {};

validar.cifrarClave = async (clave) =>{
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(clave, salt)
   
    return hash;
}

validar.compararClaves = async (clave, claveGuardada) => {
    console.log("Desde bcryptjs clave: " + clave + " claveGuardada " + claveGuardada )
    return await bcrypt.compare(clave, claveGuardada);
}




module.exports = validar;