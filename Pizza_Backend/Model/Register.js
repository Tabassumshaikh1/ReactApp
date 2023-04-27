const mongoose = require('mongoose')
const RegisSchema = mongoose.Schema({
name:{
type:String
},
email:{
    type:String
},
password:{
    type:String
},
contact:{
    type:Number
},
role:{
    type:String,
    default:'user'
}
})
module.exports = mongoose.model("Register",RegisSchema)