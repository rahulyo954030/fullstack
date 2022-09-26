const express = require("express")
const app = express()
const authRouter = require("./Routes/Auth")
const connection =require("./db/db")

app.use(express.urlencoded({extended : true}))
app.use(express.json())


app.use("/auth", authRouter)

app.get("/", async(req,res) => {
    // const user = await userModel.find()
      res.send("users here")
  })


app.listen(8080,async()=>{
 await connection
    console.log("server started on http://localhost:8080")
})