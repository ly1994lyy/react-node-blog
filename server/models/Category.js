const mongoose = require('mongoose')

const schema = mongoose.Schema({
    name:{type:String},
    isHot:{type:Boolean,default:false},
})

module.exports = mongoose.model('Category',schema)