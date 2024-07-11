import React from 'react'

// export default
export default Joke

function Joke(props) {
	return (
		<div>
			<h3>Question: {props.question}</h3>
			<h3>Answer: {props.answer}</h3>
		</div>
		)
}