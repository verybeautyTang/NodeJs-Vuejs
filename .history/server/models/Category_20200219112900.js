const mongoose = require('mongoose')
const schema = mongoose.Schema({
    name:{type:String},
    parent: {type:mongoose.SchemaTypes.ObjectId,ref:'Category'}
})
schema.virtual('children',{
    localField: '_id',
    foreignField: 'parent',
    justOne:false,
    ref:'Category'
})
module.exports = mongoose.model('Category',schema)