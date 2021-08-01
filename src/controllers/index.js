//TODO pag de inicio?

exports.home = (req,res, next) => {
    res.render("index")
 
   console.log( req.session)
}
