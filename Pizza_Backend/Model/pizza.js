const mongoose = require('mongoose')
const PizzaSchema = mongoose.Schema({
pizza_name:{
type:String
},
pizza_price:{
    type:String
},

img:{
    type:String
},
maximumSize:{
    type:Number,
    default:10
},
inc_dec:{
    type:Number,
    default:0
}
})
module.exports = mongoose.model("Pizza",PizzaSchema)