import React from 'react';
import SwipeableTemporaryDrawer from './Offcanvas';
import { useMediaQuery } from '@mui/material';
import DiscordSvg from './svg/Discord';
import Link from 'next/link';
import { useUser } from '@/utils/UserContext';

export default function Navbar() {
	const { user } = useUser();
	const isMobile = useMediaQuery('(max-width:768px)');

	return (
		<>
			{isMobile ? (
				<div className='offcanvas-menu'>
					<div className='offcanvas-menu__menu'>
						<SwipeableTemporaryDrawer />
					</div>
				</div>
			) : (
				<nav className='header container'>
					<ul className='header__left'>
						<li>Home</li>
						{!user ? (
							<Link href='/api/auth'>
								<li>Login</li>
							</Link>
						) : (
							<Link href='/api/logout'>
								<li>Logout</li>
							</Link>
						)}
						<li>Websocket</li>
						<li>Contact</li>
					</ul>
					<div className='header__right'>
						<DiscordSvg />
					</div>
				</nav>
			)}
		</>
	);
}
