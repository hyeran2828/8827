import React from 'react'

// export default
export default ContactCard

function ContactCard(props) {
	return (
		<div className='contact-card'>
			<img src="" />
			<h3>{props.contact.name}</h3>
			<p>{props.contact.email}</p>
		</div>
		)
}