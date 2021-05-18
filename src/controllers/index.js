//TODO pag de inicio?

exports.home = (req,res, next) => {
    res.render("index")
  /* if(req.session.view){
       req.session.view++;
   }else{
       req.session.view = 1;
   }*/
   console.log( req.session)
}
