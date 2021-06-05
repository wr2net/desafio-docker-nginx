const express = require('express')
const app = express()

const envi = require('dotenv').config()
const port = envi.env.DB_PORT
const config = {
    host: envi.env.DB_HOST,
    user: envi.env.DB_USERNAME,
    password: envi.env.DB_PASSWORD,
    database: envi.env.DB_DATABASE
}

const mysql = require('mysql')
const connection = mysql.createConnection(config)

const create = `CREATE TABLE people(id int NOT NULL auto_increment, name varchar(255), PRIMARY KEY(id));`
connection.query(create)

const insert = `INSERT INTO people(name) VALUES ('Wagner')`
connection.query(insert)

connection.end

app.get('/', (req, res) => {
    res.send('<h1>Full Cycle Rocks!</h1>')
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})