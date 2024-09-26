const express = require('express');
const router = express.Router();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User')

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL
 },
    async function (accessToken, refreshToken, profile, done) {

        const newUser = {
            googleId: profile.id,
            displayName: profile.displayName,
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
            profileImage: profile.photos[0].value
        };

        try {
            let user = await User.findOne({ googleId: profile.id });  // Add `await` here

            if (user) {
                done(null, user);  // Pass `null` as the first argument for success (no error)
            } else {
                user = await User.create(newUser);
                done(null, user);  // Pass `null` as the first argument
            }
        } catch (error) {
            console.log(error);
            done(error, null);  // Pass the actual error in case of failure
        }
    }
));


router.get('/auth/google',
    passport.authenticate('google', { scope: ['email', 'profile'] }));

router.get('/google/callback',
    passport.authenticate('google', {
        successRedirect: '/dashboard',
        failureRedirect: '/login-failure'

    }),
);

router.get('/login-failure', (req, res) => {
    res.send("Login failed......retry");
})

router.get('/logout',(req,res)=>{
    req.session.destroy((error)=>{
        if(error){
            console.log("error in logging out...");
            
        }
        else{
            res.redirect('/');
        }
    })
})
//persist user data after authentication
passport.serializeUser(function (user, done) {
    done(null, user.id);
})

// retriving data from sessions
passport.deserializeUser(async function (id, done) {
    try {
        const user = await User.findById(id);
        done(null, user); // User found, pass it to done
    } catch (err) {
        done(err, null); // Pass the error to done
    }
});

module.exports = router;