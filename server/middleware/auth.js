module.exports = () =>{
    const jwt = require("jsonwebtoken")
    const adminUser = require('../models/AdminUser')
    return async(req,res,next)=>{
       const token = String(req.headers.authorization || '').split(' ').pop()
       if(!token) res.status(401).send({message:'请先登录'})
       const {id} =  jwt.verify(token,'asdla324Ekakdl#klasdkasldkalda')
       if(!id) res.status(401).send({message:'请先登录'})
       req.user = await adminUser.findById(id)
       if(!req.user) res.status(401).send({message:'请先登录'})
       await next()
    }
    
}