
import React, { useRef } from 'react';
import './Container.css';

let inputValue;

// detta kan man använda om man kör 'onChange' på våran input
// men eftersom vi ändå behöver en referens för att nollställa input boxen
// använder vi oss av value där istället
const changeHandler = (v) => {
	inputValue = v.target.value;
}

// Vi använder oss inte utav state här pga vi behöver inte rendera om input elementet
const MessageInput = props => {
	const { newMessage } = props;
	const inputBox = useRef(null);	// referens till input boxen

	const post = () => {
		newMessage(inputBox.current.value);		// post funktion
		inputBox.current.value = '';		// nollställa input boxen
	}

	return (
		<div className="Input-Wrapper">
			<input type='text' ref={ inputBox }>
			</input>
			<button onClick={ post }>
				Submit
			</button>
		</div>
	)
}

export default MessageInput;