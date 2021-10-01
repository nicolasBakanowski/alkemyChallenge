
require('dotenv').config() // PARA IMPORTAR VARIABLES DE ENTORNO 
require('./connection')
const express = require('express')
const app = express()
const cors = require('cors')
const routeUser = require('./src/users/controllers/userControlles')
const { request } = require('express')
let jwt = require('jsonwebtoken')





app.use(cors())
app.use(express.json())
app.use(routeUser)

app.set('key', process.env.KEY);
app.listen(process.env.PORT, () => {
console.log(`Server running on port ${process.env.PORT}`)
})
