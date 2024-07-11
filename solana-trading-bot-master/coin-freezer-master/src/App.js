import React from 'react'
import Navbar from './Components/Navbar.js'
import MyInfo from './Components/MyInfo.js'
import Footer from './Components/Footer.js'
import ToDoList from './Components/ToDoList.js'
import ContactCard from './Components/ContactCard.js'
import Joke from './Components/Joke.js'
import Products from './Components/Products.js'
import Conditional from './Components/Conditional.js'
import Form from './Components/Form.js'

import JokesData from './jokesData.js'
import ToDoListData from './toDoListData.js'

function App() {

	return (
		<Form />
	)
}





// function App() {

// 	const jokeComponents = JokesData.map(joke => {
// 		return <Joke key={joke.id} question={joke.question} answer={joke.answer} />
// 	})

// 	const todolistComponent = ToDoListData.map(item => <ToDoList key={item.id} item={item} /> )

// 	return (
// 		<div>
// 			<Navbar />
// 			<MyInfo />

// 			{todolistComponent}

// 			{jokeComponents}

// 			<ContactCard contact={{name:"first name", email:"email 1"}} />
// 			<ContactCard contact={{name:"first name", email:"email 1"}} />
// 			<ContactCard contact={{name:"first name", email:"email 1"}} />
// 			<ContactCard contact={{name:"first name", email:"email 1"}} />

			
// 			<Footer />
// 		</div>
// 		)
// }

// export default
export default App