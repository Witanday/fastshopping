const jwt = require('jsonwebtoken');
require('dotenv').config();


const jwtKey = process.env.JWT_SECRET

const initiateToken = (user_id)=>{
    const payload = {
        user_id,
    }
    const secret = process.env.JWT_SECRET;
    const options = {
        expiresIn: '30m'
    }
    return jwt.sign(payload, secret, options)
}

function authenticate (req,res,next){
    const token = req.get('Authorization');
    if(token){
        jwt.verify(token , jwtKey, (err, decoded) =>{
            if(err) return res.status(401).json(err);
            req.decoded = decoded;
            next()
        })
    }else{
        return res.status(401).json({
            error:'No token provided, must be set on the Authorization Header'
        })
    }
}



module.exports = {
    authenticate,
    initiateToken
  };