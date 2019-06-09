const mongoose = require('mongoose');
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const ProductSchema = new Schema ({
    category : {
        type:ObjectId, 
        ref:'Category'},
    name :String,
    price :Number,
    image:String,
    description: String
})

module.exports = mongoose.model('Product', ProductSchema);