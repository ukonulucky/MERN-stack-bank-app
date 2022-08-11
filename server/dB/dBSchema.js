const mongoose = require("mongoose")
const { isEmail } = require("validator")

const allUser = mongoose.Schema({
        fullName: {
        type: String,
        required: [true, "full name is required"],
        lowercase:true
    },
    email: {
        type: String,
        required: [true, "full name is required"],
        lowercase: true,
        validate:[isEmail, "Email is required"]
    },
    phoneNumber: {
        type: String,
        required: true,
        unique:true
    },
    address: {
        type:   String,
        required: [true, "full name is required"],
        lowercase:true
    },
    password: {
        type: String,
        required:true
  }
},  { timestamps: true })

const allUserSchema = mongoose.model("allUser", allUser)
 
const userHistory = mongoose.Schema({
   
    history: [{
        name: {
            type: String,
            required: true
        },
        accountNUmber: {
            type: Number,
            required:true
        },
        transaction: {
            type: String
        },
        amount: {
            type: Number,
            required: true
    
        },
        balance: {
            type: Number,
            required: true
        }
    }]
},   { timestamps: true })
 const allUserHistorySchema = mongoose.model("userHistory",userHistory)

module.exports = {
    allUserSchema, allUserHistorySchema
}