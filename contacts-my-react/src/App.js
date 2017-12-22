import React, { Component } from 'react'
import ListContacts from './listContacts.js'

class App extends React.Component {
	state = {
		contacts: [
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
	}

	removeContact = (contact) => {
    	this.setState((state) => ({
      		contacts: state.contacts.filter((c) => c.id !== contact.id)
    	}))
  	}

	render() {
		return(
			<div>
				<ListContacts onDeleteContact={this.removeContact} contacts={this.state.contacts}/>
			</div>
		)
	}
}

export default App;