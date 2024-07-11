import React from 'react'

// export default
export default Conditional

function Conditional(props) {

	return (
		<div>
			{props.isLoading ? <div>boom</div> : <div>reee</div> }
		</div>
	)

}