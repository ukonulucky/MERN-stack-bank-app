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
        type: String,
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

// checking fro uniqueness of the phoneNumber
allUser.path("phoneNumber").validate(async(phoneNumber) => {
    const res = await mongoose.models.allUser.countDocuments({ phoneNumber })
    return !res
}, "Phone number must be unique")

//salting and hashing my password field before initialization
allUser.pre("save", async function(next){
    const newSalt = await bcrypt.genSalt()
    this.password  = await bcrypt.hash(this.password, newSalt)
    next()
})

// creating a mongoose static method

allUser.statics.login = async function (phoneNumber, password) {
    console.log(phoneNumber, password)
    const user = await this.findOne({ phoneNumber })
    console.log(user)
    if (user) {
        const res = await bcrypt.compare(password, user.password)
        if (res) {
            return user
        }
        else {
            throw Error("incorrect password")
        }
    }
    throw Error("incorrect phonenumber")

}
const allUserSchema = mongoose.model("allUser", allUser)
 
module.exports = allUserSchema