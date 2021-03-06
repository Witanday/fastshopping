const mongoose = require ('mongoose');
const bcrypt = require('bcrypt-nodejs');
const Schema = mongoose.Schema;


// The user schema attributes / Characteristics / fields
const UserSchema = new Schema({
    email :{ type : String, unique :true , lowercase: true},
    password :String,

    profile :{
        firstname : { type : String, default :''},
        lastname : { type : String, default :''},
        picture : { type : String, default :''},
},

adress : String,
history : [{
    date : Date,
    paid : { type : Number, default :0},
    // item : { type : Schema.Types.ObjectId, ref:''}
}]

});




// Hash password before we even save it in to the database

UserSchema.pre('save', function (next){
    const user = this;
    if(!user.isModified('password')) return next();
    bcrypt.genSalt(10, function( err, salt){
        if(err) return next(err);
    bcrypt.hash(user.password, salt, null, function(err, hash){
        if(err) return next(err);
        user.password = hash;
        next();
    })
    })
})

//compare password in the database and the one that the user type in
UserSchema.methods.comparePassword = function(password){
    return bcrypt.compareSync(password, this.password)
}


module.exports = mongoose.model('User', UserSchema);
