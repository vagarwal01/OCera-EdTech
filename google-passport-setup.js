const passport = require('passport')

const GoogleStrategy = require('passport-google-oauth2').Strategy

passport.serializeUser(function(user, done) {
    /*
    From the user take just the id (to minimize the cookie size) and just pass the id of the user
    to the done callback
    PS: You dont have to do it like this its just usually done like this
    */
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    /*
    Instead of user this function usually recives the id 
    then you use the id to select the user from the db and pass the user obj to the done callback
    PS: You can later access this data in any routes in: req.user
    */
    done(null, user);
});

passport.use(new GoogleStrategy({
    clientID: "254924267599-a56c8so2jhoddjfhmj9dqqsevsn5f8de.apps.googleusercontent.com",
    clientSecret: "jHE1qpMhkSM8LOWKZ5u0fWx6",
    callbackURL: "/google/callback",
    passReqToCallback: true
}, function(request, accessToken, refreshToken, profile, done) {
    return done(null, profile)
}))
