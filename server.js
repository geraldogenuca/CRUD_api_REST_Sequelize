require('dotenv').config()

// Import libs and dependencies
const 
    port = process.env.PORT_SERVER || 3001
    express = require('express')
    app = express()
    morgan = require('morgan')
    cors = require('cors')
    connection_db = require('./src/database')


// Import routes api


// 
    corsOptions = {origin: process.env.URL_SERVER}

app.use(
    'public', express.static('public'),
    express.json(),
    morgan('dev'),
    cors(corsOptions)
)


// Create endpoints tables
app.use(
    '/test', (req, res) => {res.status(201).json({message: 'Pages on!'})
})

// Creating server api and database connection
app.listen(
    port, 
    () => {
        console.log(
            `Server is running in PORT: ${port}!`
        )
        connection_db.sync(() => console.log(
            `DataBase connected successfully! ${process.env.DB_NAME}`)
        )
    },
)