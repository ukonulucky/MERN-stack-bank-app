const express = require("express")
const dotenv = require("dotenv")
const dBConnect = require("./dB/dBConnect")
const router = require("./routes/router")
const cors = require("cors")

const port = process.env.PORT || 5000

// cors configuration
const corsConfig = {

}

const app = express() 

// middleware
app.use(express.json())
app.use(cors())

// routes
app.use("/user", router)

// starting server

const dBAndServerConnect = async () => {
   try {
       const res = await dBConnect()
       res && app.listen(port, () => {
           console.log(`dB connected and server runnning on port ${port}`)
       })
   } catch (error) {
     console.log(error.message)
   }
}


dBAndServerConnect()