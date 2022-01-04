const {Schema, model, ObjectId} = require("mongoose")

const Message = new Schema({
    sender_ID:{type: ObjectId, ref: "User"},
    recipient_ID:{type: ObjectId, ref: "User"},
    message:{type: String, required: true},
    messageDate:{type: Date},
})
module.exports = model('Message', Message)
