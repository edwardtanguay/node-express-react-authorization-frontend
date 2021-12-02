import { useState } from 'react';
import './App.scss';

function App() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleUsername = (e) => {
		let _username = e.target.value;
		setUsername(_username);
	}

	const handlePassword = (e) => {
		let _password = e.target.value;
		setPassword(_password);
	}
	
	const handleButton = (e) => {
		e.preventDefault();
		console.log('access backend');
	}

	return (
		<div className="App">
			<h1>MERN Showcase App</h1>
			<form>
				<fieldset>
					<legend>Login</legend>
					<div className="row">
						<label htmlFor="username">Username</label>
						<input type="text" id="username" value={username} onChange={handleUsername} />
					</div>
					<div className="row">
						<label htmlFor="password">Password</label>
						<input type="password" id="password" value={password} onChange={handlePassword} />
					</div>
					<div className="buttonRow">
						<button onClick={handleButton}>Login</button>
					</div>
				</fieldset>
			</form>
		</div>
	);
}

export default App;