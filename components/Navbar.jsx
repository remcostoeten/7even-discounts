import React from 'react';
import DiscordSvg from './svg/discord';
import { GitHub } from '@mui/icons-material';
import SwipeableTemporaryDrawer from './Offcanvas';
import { useMediaQuery } from '@mui/material';
import { useLocation } from 'react-router-dom';

export default function Navbar() {
	const isMobile = useMediaQuery('(max-width:768px)');
	const location = useLocation();

	const getActiveClass = (path) => {
		if (path === '/' && location.pathname === '') {
			return 'active';
		} else if (location.pathname.startsWith(path)) {
			return 'active';
		}
		return '';
	};

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
						<li className={getActiveClass('/')}>Home</li>
						<li className={getActiveClass('/pricing')}>Pricing</li>
						<li className={getActiveClass('/websocket')}>
							Websocket
						</li>
						<li className={getActiveClass('/contact')}>Contact</li>
					</ul>
					<div className='header__right'>
						<DiscordSvg />
						<GitHub />
					</div>
				</nav>
			)}
		</>
	);
}
