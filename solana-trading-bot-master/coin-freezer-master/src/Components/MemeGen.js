import React from 'react'
import ReactDOM from 'react-dom'

class MemeGen extends React.Component {
	constructor () {
		super()
		this.state = {
			topText: "",
			bottomText: "",
			randomImg: "http://www.pngall.com/wp-content/uploads/2016/05/Trollface-PNG-Image.png",
			randomMemes: []
		}

		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)

	}

	handleSubmit (event) {
		event.preventDefault();

		const imgState = this.state.randomMemes
		const newImg = imgState[Math.floor(Math.random()*imgState.length)];

		this.setState({randomImg: newImg.url})
		
	}

	handleChange (event) {
		const {name, value} = event.target
		this.setState({
			[name]: value
		})
	}

	componentDidMount() {
		fetch("https://api.imgflip.com/get_memes")
		.then(response => response.json())
		.then(response => {
			const {memes} = response.data
			this.setState({ randomMemes:memes })
		})
	}

	render() {
		

		return (
			<div>			

				<form onSubmit={this.handleSubmit}>

				<input 
					type="text" 
					value={this.state.topText} 
					onChange={this.handleChange} 
					name="topText" 
					placeholder="Top text" 
				/><p>{this.state.topText}</p>

				<input 
					type="text" 
					value={this.state.bottomText} 
					onChange={this.handleChange} 
					name="bottomText" 
					placeholder="Bottom text" 
				/><p>{this.state.bottomText}</p>

					<button>Change meme</button>
				</form>	
				
				<div id="memeCont">
					<img src={this.state.randomImg} width="200" />
				</div>
			</div>
		)
	}
}


export default MemeGen