import React, { Component } from 'react'
import ListContacts from './listContacts.js'

var contacts = [
	{
		id: 'ryan',
		name: 'Ryan Florence',
		email: 'ryan@reacttraining.com',
		avatarURL: '../public/ryan.jpg'
	},
	{
		id: 'michael',
		name: 'Michael Jackson',
		email: 'michael@reacttraining.com',
		avatarURL: '../public//michael.jpg'
	},
	{
		id: 'tyler',
		name: 'Tyler McGinnis',
		email: 'tyler@reacttraining.com',
		avatarURL: '../public/tyler.jpg'
	}
]
	
class App extends React.Component {
	render() {
		return(
			<div>
				<ListContacts contacts={contacts}/>
			</div>
		)
	}
}

export default App;