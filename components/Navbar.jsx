import React from 'react';
import DiscordSvg from './svg/discord';
import { GitHub } from '@mui/icons-material';

export default function Navbar() {
	return (
		<nav className='header container'>
			<ul className='header__left'>
				<li>Pricing</li>
				<li>Websocket</li>
				<li>Contact</li>
			</ul>
			<div className='header__right'>
				<DiscordSvg />
				<GitHub />
			</div>
		</nav>
	);
}
