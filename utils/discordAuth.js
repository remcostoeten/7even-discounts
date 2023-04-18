import nextConnect from 'next-connect';
import passport from 'passport';
import DiscordStrategy from 'passport-discord';

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
		async (accessToken, _, profile, done) => {
			try {
				return done(null, profile);
			} catch (err) {
				return done(err, null);
			}
		},
	),
);

const initialize = () => {
	return passport.initialize();
};

export { initialize, passport };
