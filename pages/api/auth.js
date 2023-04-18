import nextConnect from 'next-connect';
import passport from '../../../utils/passport';

const handler = nextConnect();

handler.use(passport.initialize());

handler.get(
	passport.authenticate('discord', {
		failureRedirect: '/login', // Redirect to the login page on failure
	}),
	(req, res) => {
		// Successful authentication, redirect to your desired page
		res.redirect('/');
	},
);

export default handler;
