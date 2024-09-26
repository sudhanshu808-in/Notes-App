const express = require('express');
const router = express.Router();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;


passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log(profile);
    
  }
));


router.get('/auth/google',
    passport.authenticate('google', { scope: ['email' , 'profile'] }));
  
  router.get('/auth/google/callback', 
    passport.authenticate('google', { 
        successRedirect:'/dashboard',
        failureRedirect: '/login-failure'
            
    }),
    );

router.get('/login-failure',(req,res)=>{
    res.send("Login failed......retry");    
})


//persist user data after authentication
passport.serializeUser(function(user,done){
    done(null,user.id);
})

// retriving data from sessions
passport.deserializeUser(function(id,done){
User.findById(id,function(err,user){
    done(err,user);
})
})
module.exports = router;