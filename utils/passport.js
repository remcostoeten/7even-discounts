// utils/passport.js
import DiscordStrategy from 'passport-discord';
import passport from 'passport';

const { DISCORD_CLIENT_ID, DISCORD_CLIENT_SECRET, DISCORD_CALLBACK_URL } =
	process.env;

passport.use(
	new DiscordStrategy(
		{
			clientID: DISCORD_CLIENT_ID,
			clientSecret: DISCORD_CLIENT_SECRET,
			callbackURL: DISCORD_CALLBACK_URL,
			scope: ['identify', 'email'],
		},
		async (accessToken, refreshToken, profile, done) => {
			try {
				// You can save the profile data to your database here
				return done(null, profile);
			} catch (err) {
				return done(err, null);
			}
		},
	),
);
