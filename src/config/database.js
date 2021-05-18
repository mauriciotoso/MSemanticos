const mysql = require('mysql');
const { database } = require("./keysBDD")
const {promisify} = require('util');

const pool = mysql.createPool(database)

pool.getConnection( (err, connection) => {
    if(err){
        if (err.code == "PROTOCOL_CONNECTION_LOST"){
            console.log("DATABASE CONNECTION WAS CLOSE")
        }
        if(err.code === "ER_CON_COUNT_ERROR"){
            console.log("DATABASE HAS TO MANY CONNECTIONS")
        }
        if(err.code === "ENCONNREFUSED"){
            console.log("DATABASE CONNECTION WAS REFUSED")
        }
        console.log(err)
    }

    if(connection){
        connection.release();
        console.log("DBB conectada")
    }

});

//* Promisify Pool queries (convertimos en promesas lo que antes era en coallbacks)
pool.query = promisify(pool.query);

module.exports = pool;