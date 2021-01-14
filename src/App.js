import logo from './logo.svg';
import './App.css';

import InputMessage from './Input/Container';
import { useState } from 'react';
import { printMessages, messageArray } from './logic/print.js';

// ja.. 'vi'
export const me = 'zerg';

function App() {
	const [ state, setState ] = useState({ printMessages });

	const newMessage = (v) => {
		messageArray.push({
			user: me,
			message: v,
		});

		setState({ printMessages })
	}

	return (
		<div className="App">
		<ul>
			{ state.printMessages() }
		</ul>
		<InputMessage newMessage={ newMessage }/>
		</div>
	);
}

export default App;
