import React, { Components } from 'react'

class ListComponents extends React.Component {
	render() {
		return (

			<ol>
				{this.props.contacts.map((contact) => (
					<li key={contact.id}>
						{contact.name}
					</li>
				))}
			</ol>
		)
	}
}

export default ListComponents