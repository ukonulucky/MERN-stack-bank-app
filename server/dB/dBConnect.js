const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()

const MONGU_URL  = process.env.MONGU_URL

// connecting to mongoDB database
const dBConnet = async() => {
    try {
     const res = await mongoose.connect(MONGU_URL, {
         autoIndex: true,
         useNewUrlParser: true,
         useUnifiedTopology: true,
      
            
     })
        return res
        
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = dBConnet