const mongoose = require("mongoose")
const connection =  mongoose.connect("mongodb+srv://rahulsingh1996:rahulsingh1996@cluster0.wmk4oet.mongodb.net/p4mock?retryWrites=true&w=majority")
.then(()=>{
    console.log("DB Connected")
}).catch((e)=>{
    console.log(e)
})

module.exports = connection;
//103.158.137.179/32
