import nextConnect from 'next-connect';
import { passport, initialize } from '../../utils/discordAuth';

const handler = nextConnect();

handler.use(initialize());

handler.get(
	passport.authenticate('discord', {
		failureRedirect: '/login',
	}),
	(req, res) => {
		res.redirect('/');
	},
);

export default handler;
