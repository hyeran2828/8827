import React from 'react'

// export default
export default Products

function Products(props) {
	return (
		<div>
			<h3>{props.products.name}</h3>
			<h3>{props.products.description}</h3>
		</div>
		)
}