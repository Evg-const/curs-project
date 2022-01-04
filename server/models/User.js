const {Schema, model} = require("mongoose")

const User = new Schema({
    email:{type: String, required: true, unique: true},
    password:{type: String, required: true},
    name:{type: String, required: true},
    surname:{type: String, required: true},
    registrationDate: {type: Date, required: true},
    status:{type: String, required: true, default: 'Unlocked'},
    role:{type: String, required: true, default: 'User'},
    lang:{type: String, required: true, default: 'ru_RU'},
    theme:{type: String, required: true, default: 'White'},

})
module.exports = model('User', User)
