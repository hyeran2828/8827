import React from 'react'
// import ReactDOM from 'react-dom'

function Header () {
	const tables = ["one", "two", "three"];
	let i;

	for (i = 0; i < tables.length; i++){
		console.log("boo");
	}

	return (

		
		
		<header>
			<h3>Header App New</h3>
			<img width="200" src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface-PNG.png" alt="problem"/>
			<p>Meme gen text</p>
		</header>
	)
}

export default Header