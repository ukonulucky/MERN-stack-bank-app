const express = require("express")
const dotenv = require("dotenv")
const dBConnect = require("./dB/dBConnect")
const router = require("./routes/router")
const cors = require("cors")
const cookieParser = require("cookie-parser")

const port = process.env.PORT || 5000

// cors configuration
const corsConfig = {
  origin: ['http://localhost:3000'],
  "Access-Control-Allow-Origin": "http://localhost:3000",
  "Access-Control-Allow-Credentials": true,
}

const app = express()

// middleware

app.use(express.json())
app.use(cors(corsConfig))
app.use(cookieParser())

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