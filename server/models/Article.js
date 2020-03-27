const mongoose = require('mongoose')

const schema = mongoose.Schema({
    title:{type:String},
    body:{type:String},
    category:[{type:mongoose.SchemaTypes.ObjectId,ref:'Category'}]
})

module.exports = mongoose.model('Article',schema)