const express = require("express")
const app = express()
const authRouter = require("./Routes/Auth")
const connection =require("./db/db")
const cors = require("cors")

app.use(express.urlencoded({extended : true}))
app.use(express.json())


app.use("/auth", authRouter)
app.use(cors({
  origin:["http://localhost:3000"]
}))
app.get("/", async(req,res) => {
      res.send("users here")
  })

  const PORT = process.env.PORT || 8080 
app.listen(PORT,()=>{
  connection;
    console.log("server started on  http://localhost:8080")
})