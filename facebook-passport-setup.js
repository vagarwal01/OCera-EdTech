const passport = require('passport')
const facebookStrategy = require('passport-facebook').Strategy

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

// used to deserialize the user
passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

passport.use(new facebookStrategy({

        // pull in our app id and secret from our auth.js file
        clientID: '1860135800808555',
        clientSecret: '812cee9a443c8014b319648575a625ef',
        callbackURL: '/facebook/callback',
        profileFields: ['id', 'displayName', 'name', 'gender', 'picture.type(large)', 'email']

    }, // facebook will send back the token and profile
    function(token, refreshToken, profile, done) {
        // console.log(profile)
        return done(null, profile)


    }
))
