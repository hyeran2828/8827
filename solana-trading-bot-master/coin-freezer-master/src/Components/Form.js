import React from 'react'
import FormContainer from '../Components/FormContainer.js'

class Form extends React.Component {
	constructor() {
		super();
		this.state = {
			firstName: "",
			lastName: "",
			age: "",
			gender: "",
			location: "",
			vegi: false,
			cheese: false,
			milk: false
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		const {name, value, type, checked} = event.target;		

		type === "checkbox" ? 
		this.setState({[name]: checked}) :
		this.setState({[name]: value});		
	}

	render() {
		return (
			<FormContainer 
			handleChange={this.handleChange}
			data={this.state}
			/>
		)
		
	}	
}

export default Form