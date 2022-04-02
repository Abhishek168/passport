const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

// go to https://console.cloud.google.com/apis/credentials  >> create -  OAuth 2.0 Client IDs
// set client and secretId
const GOOGLE_CLIENT_ID = '';
const GOOGLE_CLIENT_SECRET = '';

passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:5000/auth/google/callback",
  passReqToCallback: true,
},
  (request, accessToken, refreshToken, profile, done) => {
    return done(null, profile);
  }));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
