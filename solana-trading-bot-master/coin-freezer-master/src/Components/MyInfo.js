import React from 'react'

// export default
export default MyInfo

const firstName = "Arturas";
const lastName = "Voros";

const styles = {
	backgroundColor: "#ddd", 
	padding: "15px"
}

function MyInfo(props) {
	return (
		<div>
			<h1 style={styles}>{firstName} {lastName}</h1>
			<h2>{props.count}</h2>
			<p>test app</p>			
		</div>
		)
}