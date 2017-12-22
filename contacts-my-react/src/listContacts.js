import React, { Components } from 'react'

class ListComponents extends React.Component {
	render() {
		return (
			<ol>
				{this.props.contacts.map((contact) => (
					<li key={contact.id}>
						{contact.name}
						<button onClick={() => this.props.onDeleteContact(contact)}>
							remove
						</button>
					</li>
				))}
			</ol>
		)
	}
}

export default ListComponents