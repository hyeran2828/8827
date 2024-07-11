import React from 'react'

// export default
export default ToDoList

function ToDoList(props) {
	return (
		<div className='ToDoListItem'>
			<input type="checkbox" onChange={() => props.changeEvent(props.item.id)} checked={props.item.completed}/>
			<p>{props.item.text}</p>
		</div>
		)
}