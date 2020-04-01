const mongoose = require('mongoose')

const schema = mongoose.Schema({
    title:{type:String},
    body:{type:String},
    isHot:{type:Boolean,default:false},
    categories:[{type:mongoose.SchemaTypes.ObjectId,ref:'Category'}],
    liked:{type:Number,default:0}
},{timestamps:{
    createdAt:"created",
    updatedAt:"updated"
}})

module.exports = mongoose.model('Article',schema)