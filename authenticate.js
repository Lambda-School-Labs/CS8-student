// // ============ from ROUTES ============= //
// // Libraries:
// const { ExtractJwt } = require('passport-jwt');
// const JwtStrategy = require('passport-jwt').Strategy;
// const passport = require('passport');
// const LocalStrategy = require('passport-local');
// const jwt = require('jsonwebtoken');

// //schema
// const User = require('./Schemas/User.js');

// const secret = 'no size limit on tokens';

// function makeToken(user) {
//   const timestamp = new Date().getTime();
//   const payload = {
//     sub: user._id,
//     username: user.username,
//     iat: timestamp
//   };

//   const options = { expiresIn: '300000' }; // 300,000 milliseconds or 5 minutes
//   return jwt.sign(payload, secret, options);
// }

// const localStrategy = new LocalStrategy(function(username, password, done) {
//   User.findOne({ username }, function(err, user) {
//     if (err) {
//       done(err);
//     }
//     if (!user) {
//       done(null, false);
//     }

//     user.verifyPassword(password, function(err, isValid) {
//       if (err) {
//         return done(err);
//       }
//       if (isValid) {
//         const { _id, username } = user;
//         return done(null, { _id, username });
//       }
//       return done(null, false);
//     });
//   });
// });

// const jwtOptions = {
//   jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),

//   secretOrKey: secret
// };

// const jwtStrategy = new JwtStrategy(jwtOptions, function(payload, done) {
//   User.findById(payload.sub)

//     .select('-password')
//     .then(user => {
//       if (user) {
//         done(null, user);
//       } else {
//         done(null, false);
//       }
//     })
//     .catch(err => {
//       return done(err, false);
//     });
// });

// passport.use(localStrategy);
// passport.use(jwtStrategy);

// const authenticate = passport.authenticate('local', { session: false });
// // This is what you will use to protect user's notes -- see Auth Code Along hobbits [POST] for example
// const protected = passport.authenticate('jwt', { session: false });

// module.exports = {
//   authenticate
// };