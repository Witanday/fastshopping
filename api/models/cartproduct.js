const mongoose = require('mongoose');
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const CartProductSchema = new Schema ({
       user_id : {
            type:ObjectId, 
            ref:'User'},
        product_id :String,
        product_name:String,
        quantity:Number,
        product_price :Number,


})

module.exports = mongoose.model('CartProduct', CartProductSchema );