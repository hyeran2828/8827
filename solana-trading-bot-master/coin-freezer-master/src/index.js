const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


// import React from 'react'
// import ReactDOM from 'react-dom'

// // import './Styles/style.css'

// // Components imports
// import App from './App.js'
// import AppNew from './AppNew.js'


// ReactDOM.render(<AppNew />, document.getElementById('app'));

// module.hot.accept();