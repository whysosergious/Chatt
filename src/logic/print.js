
import { me } from './../App';
import Message from './../Message/Container';

// detta gjorde vi tillsammans
export const messageArray = [
	{
		user: 'user2',
		message: 'Hello'
	},
	{
		user: 'user3',
		message: 'World'
	},
]

export const printMessages = () => {
	let list = messageArray.map( m => {
		return <Message
			style={ m.user === me ? { textAlign: 'right'} : { textAlign: 'left'} }
			message={ m.message }
			user={ m.user }
		/>;
	})
	return list;
}