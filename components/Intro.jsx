import React from 'react';
import Terminal from '@/components/Terminal';
export default function Intro() {
	return (
		<>
			<div className='intro container'>
				<div className='intro__text'>
					<h1>Welcome,</h1>
					<p>
						<span>7even discounts</span>
					</p>
					<p
						class='fill'
						data-text='Lame slogan                                           '>
						Lame slogan
					</p>
				</div>
				<div className='intro__terminal'>
					<Terminal />
				</div>
			</div>
		</>
	);
}
