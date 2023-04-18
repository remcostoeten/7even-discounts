import nextConnect from 'next-connect';
import { initialize } from '@/utils/discordAuth';
import passport from 'passport';

const handler = nextConnect();

handler.use(initialize);

handler.get(
	passport.authenticate('discord', {
		failureRedirect: '/error',
	}),
	(req, res) => {
		res.redirect('/');
	},
);

export default handler;
