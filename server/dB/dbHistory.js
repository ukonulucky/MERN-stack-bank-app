const mongoose = require("mongoose")
const userHistory = mongoose.Schema({
    phoneNumber: {
        type: String,
        required: true
    },
    transferHistory: [{
        amount: {
            type: String,
            required: true
        },
        bank: {
            type: String,
            required:true
        },
        accountName: {
            type: String,
            required:true
        },
        transactionType: {
            type: String,
            requred:true
        },
        accountNumber: {
            type: String,
            required:true
        },
        balance: {
            type: Number,
            required: true
        }
    }],
    depositHistory: [{
        amount: {
            type: String,
            required: true
        },
       
        transactionType: {
            type: String,
            requred:true
        },
      
        balance: {
            type: Number,
            required: true
        }
    }]
},   { timestamps: true })
 const allUserHistorySchema = mongoose.model("userHistory",userHistory)

 // checking fro uniqueness of the phoneNumber
 userHistory.path("phoneNumber").validate(async(phoneNumber) => {
    const res = await mongoose.models.userHistory.countDocuments({ phoneNumber })
    return !res
}, "Phone number must be unique in the history")
module.exports =  allUserHistorySchema
