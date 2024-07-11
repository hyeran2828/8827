import React from 'react'

function FormContainer (props) {
	return (
		<form >

			<h3>My Name</h3>
			<input name="firstName" value={props.data.firstName} type="text" placeholder="First Name" onChange={props.handleChange} />
			
			<h3>My Last name</h3>
			<input name="lastName" value={props.data.lastName} type="text" placeholder="Last Name" onChange={props.handleChange} />
			
			<h3>Age</h3>
			<input name="age" value={props.data.age} type="number" onChange={props.handleChange} />

			
			<h3>Gender</h3>
			<input name="gender" checked={props.data.gender === "male"} value="male" type="radio" onChange={props.handleChange} /><span>Male</span><p></p>
			<input name="gender" checked={props.data.gender === "female"}  value="female" type="radio" onChange={props.handleChange} /><span>Female</span>

			
			<h3>Location</h3>
			<select name="location" value={props.data.location} onChange={props.handleChange}>
				<option value="">Please select</option>
				<option value="europe">Europe</option>
				<option value="america">America</option>
				<option value="asia">Asia</option>
			</select>

			
			<h3>Restricions</h3>
			<input name="vegi" checked={props.data.vegi} type="checkbox" onChange={props.handleChange} /><span>Vegi</span><p></p>
			<input name="cheese" checked={props.data.cheese} type="checkbox" onChange={props.handleChange} /><span>Cheese</span><p></p>
			<input name="milk" checked={props.data.milk} type="checkbox" onChange={props.handleChange} /><span>Milk</span>

			<h3></h3>
			<button>SUbmit</button>

		</form>

	)	
}

export default FormContainer