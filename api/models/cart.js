const mongoose = require('mongoose');
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const CartSchema = new Schema ({
    owner : {
        type:ObjectId, 
        ref:'User'},
   /*  products : [{
    date : Date,
   product_id : {
                    type:ObjectId, 
                    ref:'Product'},
    quantity : { type : Number, default :0},
    
    // item : { type : Schema.Types.ObjectId, ref:''}
}],*/
    total :String,
    price :Number,
   
})

module.exports = mongoose.model('Cart', CartSchema );