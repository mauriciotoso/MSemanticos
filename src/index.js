const express = require("express");
const handlebars = require('express-handlebars');
const path = require("path")
const morgan = require("morgan")
const session = require('express-session')
const MySQLStore = require("express-mysql-session")(session)
const passport = require("passport")
const {database} = require("./config/keysBDD");


//? Inicializaciones
const app = express()
require('./config/passport');

//? Settings
app.set("port",process.env.PORT || 3003);
app.set("views", path.join(__dirname, "views"))


app.engine('hbs', handlebars({
  layoutsDir: path.join(app.get("views"), "layouts"),
  partialsDir: path.join(app.get("views"), "partials"),
  extname: 'hbs',
  defaultLayout: 'main',


}));
app.set("view engine", "hbs")

//? Middlewares
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    store: new MySQLStore(database)
  }))

app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({extended:false}))  // para poder aceptar desde los formularios los datos que me envian los usuarios.
app.use(express.json());
app.use(morgan("dev"))


//? Variables Globales
app.use((req, res, next)=> {
  app.locals.user = req.user;  //? Manejar el usuario vinculado a la sesión globalmente
  next();
})

//? Rutas
app.use("/", require("./routes/index"));
app.use("/", require("./routes/authentication"))
app.use("/alumnos", require("./routes/students"))

app.use(function(req, res) { //!Para manejar error 404/400
  res.render('error404', {layout: false})
});

//? Public
app.use(express.static(path.join(__dirname, "public")))

//? Inicio
app.listen(app.get("port"), () =>{
    console.log("Server on port " + app.get("port"))
})