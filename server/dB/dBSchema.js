const mongoose = require("mongoose")
const { isEmail } = require("validator")
const bcrypt = require("bcrypt")

const allUser = mongoose.Schema({
        fullName: {
        type: String,
        required: [true, "Full name is required"],
        lowercase:true
    },
    email: {
        type: String,
        required: [true, "Email is is required"],
        lowercase: true,
        validate:[isEmail, "Email is not valid "]
    },
    phoneNumber: {
        type: Number,
        required: [true, "phoneNumber is required"],
        unique:true
    },
    address: {
        type:   String,
        required: [true, "full name is required"],
        lowercase:true
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
        trim:true
  }
}, { timestamps: true })

//salting and hashing my password field before initialization
allUser.pre("save", async function(next){
    const newSalt = await bcrypt.genSalt()
    this.password  = await bcrypt.hash(this.password, newSalt)
    next()
})

const allUserSchema = mongoose.model("allUser", allUser)
 
module.exports = allUserSchema