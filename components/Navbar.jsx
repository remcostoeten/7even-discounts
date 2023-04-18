import React from 'react';
import SwipeableTemporaryDrawer from './Offcanvas';
import { useMediaQuery } from '@mui/material';

export default function Navbar() {
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
						<li>Pricing</li>
						<li>Websocket</li>
						<li>Contact</li>
					</ul>
					<div className='header__right'></div>
				</nav>
			)}
		</>
	);
}
