
import React from 'react';

const Message = props => {
	const { message, style, user } = props;
	return (
		<li style={ style }>
			<h2 style={{ color: 'red' }}>
				{ user }
			</h2>
			{ message }
		</li>
	)
}

export default Message;