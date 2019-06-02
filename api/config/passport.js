const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy();


//SERIALIZE  AND DESERIALIZE USER
passport.serializeUser(function(user, done){
    done(null,user._id);
})

passport.serializeUser(function(user, done){
    done(null,user._id);
});

passport.deserializeUser(function(id, done){
    User.findById(id, function(id,done){
        done(err,user);
    });
})


// MIDDLEWARE

passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback : true
}, function(req,email,password,done){
    User.findOne({
        email: email}, function(err,user){
            if(!user){
                return done( null,false, function(){
                    console.log('No user has been found')
                })
            }

            if(!user.comparePassword(password)){
                return done( null,false, function(){
                    console.log("LOGIN MESSAGE : OOPS! Wrong Password")
                })
            }

            return done(null,user)
        }
    )}
))

//CUSTOM FUNCTION TO VALIDATE 

exports.isAuthenticated = function(req, res, next){
    if(req.isAuthenticated()){
        return next()
    }
    res.redirect('/login');
}