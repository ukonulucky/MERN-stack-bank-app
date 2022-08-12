const mongoose = require("mongoose")
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
    allUserHistorySchema
}