const express = require('express')
const bodyParser = require('body-parser')
const morgan= require('morgan')
const helmet= require('helmet')
const cors= require('cors')
const dotenv= require('dotenv').config()
const app = express()

//set listener
const port = process.env.APP_PORT
app.listen(port, () => { console.log(`App running on port ${port}`) })

//set timezone in whole project
//process.env.TZ = 'UTC'
// delete process.env.TZ;

// Static Files
app.use(express.static('public'))

//console requests
if (process.env.NODE_ENV === 'DEV') {
    app.use(morgan('tiny'))
}

/*Security Headers*/
app.use(helmet())
/*Resource Sharing*/
app.use(cors())
/*JSON Input Handling*/
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// import the routes
app.use(require('./app/routes'))

module.exports = app
