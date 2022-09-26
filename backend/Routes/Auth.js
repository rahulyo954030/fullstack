 const  {Router} = require("express")
const User = require("../models/user")
 const authRouter = Router()

//  signup
 authRouter.post("signup", (req,res)=>{
    const userdata = new User(req.body)
    userdata.save((err,success)=>{
        if(err){
            return res.status(500).send({Message: "Error Occurred"})
        }
        return res.status(201).send({Message:"Signup Successfully", userdata:success["_doc"]})

    })
 })

 module.exports = authRouter