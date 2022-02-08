 const jwt = require('jsonwebtoken')
 
 const isAuth=(req,res,next)=>{
    const authorization=req.headers.authorization
    console.log(req.headers.authorization)
    if(authorization){
      const token = authorization.slice(7,authorization.length) //bearer token value
      jwt.verify(token,'BhaiKaBirthday',(err,decode)=>{
          if(err){
              res.status(401).send({message:'Invalid token'})
          }
          else{
              req.user=decode
              next()
          }
      })
    }
    else{
        res.status(401).send({message:'No token'})

    }
}

module.exports =isAuth;