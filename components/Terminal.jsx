import { useState } from 'react';

export default function Login() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleUsernameChange = (event) => {
		setUsername(event.target.value);
	};

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		// TODO: Handle form submission
	};

	return (
		<div className='window terminal'>
			<div className='terminal__taskbar controls'>
				<div className='controls__left'>
					<div className='red dot'></div>
					<div className='yellow dot'></div>
					<div className='green dot'></div>
				</div>
				<div classname='controls__center'>
					<p className='terminal__title'>Login</p>
				</div>
			</div>
			<div className='content'>
				<form onSubmit={handleSubmit}>
					<div className='command'>
						<span className='prompt'>~ ❯ </span>
						<label className='input-label'>Username:</label>
						<div className='input-wrapper'>
							<input
								type='text'
								className='input-field'
								value={username}
								onChange={handleUsernameChange}
							/>
							<div class='blinking'></div>
						</div>
					</div>
					<div className='command'>
						<span className='prompt'>~ ❯ </span>
						<label className='input-label'>Password:</label>
						<div className='input-wrapper'>
							<input
								type='password'
								className='input-field'
								value={password}
								onChange={handlePasswordChange}
							/>
							<div class='blinking-two'></div>
						</div>
					</div>
					<button type='submit' className='button'>
						Login
					</button>
				</form>
			</div>
		</div>
	);
}
